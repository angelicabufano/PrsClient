import { useEffect, useState } from "react";
import { Request } from "./Request";
import { requestAPI } from "./RequestAPI";
import RequestCard from "./RequestCard";
import "bootstrap/dist/css/bootstrap.min.css";
import { toast } from "react-hot-toast";

function RequestsPage() {
  const [requests, setRequest] = useState<Request[]>([]);
  const [busy, setBusy] = useState(false);

  async function loadRequests() {
    try {
      setBusy(true);
      const data = await requestAPI.list();
      setRequest(data);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setBusy(false);
    }
  }

  useEffect(() => {
    loadRequests();
  }, []);

  async function remove(request: Request) {
    if (confirm("Are you sure you want to delete this Request?")) {
      if (request.id) {
        await requestAPI.delete(request.id);
        let updatedRequests = requests.filter((r) => r.id !== request.id);
        setRequest(updatedRequests);
        toast.success("Successfully deleted.");
      }
    }
  }

  return (
    <>
      {busy && (
        <section className=" d-flex justify-content-center align-items-center align-content-center vh-100">
          <div className=" spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </section>
      )}

      <section className="d-flex flex-wrap gap-4 list bg-secondary-subtle p-3">
        {requests.map((request) => (
          <RequestCard key={request.id} request={request} onRemove={remove} />
        ))}
      </section>
    </>
  );
}

export default RequestsPage;
