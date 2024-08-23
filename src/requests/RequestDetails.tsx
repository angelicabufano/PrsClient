import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { Request } from "./Request";
import { requestAPI } from "./RequestAPI";

import RequestLineTable from "../requestLines/RequestLineTable";
import { RequestLine } from "../requestLines/RequestLine";
import { requestLineAPI } from "../requestLines/RequestLineAPI";
import { SubmitHandler, useForm } from "react-hook-form";


function RequestDetails() {

  let {id} = useParams<{id: string}>();
  const requestId = Number(id);
  const [request, setRequest] = useState<Request | undefined>(undefined);
  const [busy, setBusy] = useState(false);
  const navigate = useNavigate();

  async function loadRequest() {
    try {
      if (!requestId) return;
      setBusy(true);
      const data = await requestAPI.find(requestId);
      setRequest(data);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setBusy(false);
    }
  }

  useEffect(() => {
    loadRequest();
  }, []);

  const getBadgeClass = (status: string | undefined) => {
    switch (status?.toLowerCase()) {
      case "new":
        return "badge bg-primary";
      case "review":
        return "badge bg-warning";
      case "approved":
        return "badge bg-success";
      case "rejected":
        return "badge bg-danger";
        
    }
  };

  const {
    handleSubmit,
    formState: { errors },
  } = useForm<Request>({
    defaultValues: async () => {
      if (!requestId) {
        return Promise.resolve(new Request());
      } else {
        return await requestAPI.find(requestId);
      }
    },
  });






  
  async function removeRequestLine(requestLine: RequestLine) {
    if (confirm("Are you sure you want to delete this Request?")) {
      if (requestLine.id) {
        await requestLineAPI.delete(requestLine.id);
        toast.success("Successfully deleted.");
        let updatedRequestLines = request?.requestLine?.filter((rl) => rl.id !== requestLine.id);
        if (request) {
          setRequest({ ...request, requestLine: updatedRequestLines } as Request);
        }
      }
    }
  }

  const handleReview: SubmitHandler<Request> = async (request: Request) => {
    try {
      await requestAPI.review(request);
      navigate("/requests");
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const handleApprove: SubmitHandler<Request> = async (request: Request) => {
    try {
      await requestAPI.approve(request);
      navigate("/requests");
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  const handleReject: SubmitHandler<Request> = async (request: Request) => {
    try {
      await requestAPI.reject(request);
      navigate("/requests");
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  if (!request) return null;

  return (
    <>
      <nav className="d-flex justify-content-between pe-2">
        <h4>Requests</h4>
        <div>
          <button onClick={handleSubmit(handleReview)} className="ms-2 btn btn-primary me-2">
            Send For Review
          </button>
          <button onClick={handleSubmit(handleApprove)} className="btn btn-outline-success me-2">
            Approve
          </button>
          <button onClick={handleSubmit(handleReject)} className="btn btn-outline-danger">
            Reject
          </button>
        </div>
      </nav>
      <hr />
      <>
      {busy && (
          <section className="d-flex justify-content-center align-items-center align-content-center vh-100">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </section>
        )}
        {request && (
          <>
            <section className="card d-flex flex-row justify-content-between gap-5 p-4 w-100 bg-body-tertiary">
              <dl>
                <dt>Description</dt>
                <dd>{request.description}</dd>
                <dt>Justification</dt>
                <dd>{request.justification}</dd>
              </dl>
              <dl>
                <dt>Delivery Method</dt>
                <dd>{request.deliveryMode}</dd>
                <dt>Status</dt>
                <dd className={getBadgeClass(request?.status)}>{request?.status}</dd>
              </dl>
              <div>
                <dl>
                  <dt>Requested By</dt>
                  <dd>
                    {request?.user?.firstname} {request?.user?.lastname}
                  </dd>
                </dl>
              </div>
            </section>

            <div>
              <RequestLineTable request={request} onRemove={removeRequestLine} />
            </div>
          </>
        )}
      </>
    </>
  );
}



export default RequestDetails;
