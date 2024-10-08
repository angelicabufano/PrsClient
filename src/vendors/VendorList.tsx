import { useEffect, useState } from "react";
import { Vendor } from "./Vendor";
import { vendorAPI } from "./VendorAPI";
import VendorCard from "./VendorCard";
import "bootstrap/dist/css/bootstrap.min.css";
import toast from "react-hot-toast";

function VendorsPage() {
  const [vendors, setVendor] = useState<Vendor[]>([]);
  const [busy, setBusy] = useState(false);

  async function loadVendors() {
    try {
      setBusy(true);
      const data = await vendorAPI.list();
      setVendor(data);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setBusy(false);
    }
  }

  useEffect(() => {
    loadVendors();
  }, []);

  async function remove(vendor: Vendor) {
    if (confirm("Are you sure you want to delete this Vendor?")) {
      if (vendor.id) {
        await vendorAPI.delete(vendor.id);
        let updatedVendors = vendors.filter((v) => v.id !== vendor.id);
        setVendor(updatedVendors);
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
        {vendors.map((vendor) => (
          <VendorCard key={vendor.id} vendor={vendor} onRemove={remove} />
        ))}
      </section>
    </>
  );
}

export default VendorsPage;
