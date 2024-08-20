import RequestForm from "./RequestForm";

function RequestEditPage() {
  return (
    <>
      <nav className="d-flex justify-content-between">
        <h2>Edit Request</h2>
      </nav>
      <hr />

      <RequestForm />
    </>
  );
}

export default RequestEditPage;