import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { Request } from "./Request";
import { requestAPI } from "./RequestAPI";
// import RequestLineTable from "../requestLine/RequestLineTable";
import { User } from "../users/User";

function RequestDetails() {
  const { requestId: RequestIdAsString } = useParams<{
    requestId: string;
  }>();
  let {id} = useParams<{id: string}>();
  const requestId = Number(id);
  const [request, setRequest] = useState<Request | undefined>(undefined);
  const [busy, setBusy] = useState(false);

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

//   async function removeRequestLine(requestLine: RequestLine) {
//     if (confirm("Are you sure you want to delete this Request?")) {
//       if (requestLine.id) {
//         await requestLineAPI.delete(requestLine.id);
//         toast.success("Successfully deleted.");
//         let updatedRequestLines = request?.requestLines?.filter((rl) => rl.id !== requestLine.id);
//         if (request) {
//           setRequest({ ...request, requestLines: updatedRequestLines } as Request);
//         }
//       }
//     }
//   }

  if (!request) return null;

  return (
    <>
      <nav className="d-flex justify-content-between pe-2">
        <h4>Request</h4>
        <Link to={`/requests/edit/${request.id}`} className="btn btn-outline-primary">
          edit request
        </Link>
      </nav>
      <hr />
      <>
        {busy && (
          <section className="d-flex justify-content-center align-items-center align-content-center vh-100">
            <div className=" spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </section>
        )}
        {request && (
          <>
            <section className="card d-flex flex-row gap-5 p-4 w-100 bg-body-tertiary">
              <dl className="">
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
            </section>
            <div>
              <dl>
                <dt>Requested By</dt>
                <dd>
                  {request?.user?.firstname} {request?.user?.lastname}
                </dd>
              </dl>
            </div>

            {/* <div>
              <RequestLineTable request={request} onRemove={removeRequestLine} />
            </div> */}
          </>
        )}
      </>
    </>
  );
}

export default RequestDetails;
