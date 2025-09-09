import { Button, Divider } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import Company from "../CompanyProfile/Company";
import SimilarCompanies from "../CompanyProfile/SimilarCompanies";

const CompanyPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="min-h-[90vh] bg-white-950 font-[Montserrat] p-5">
        <Divider size="xs" />
        <Button
          leftSection={<IconArrowLeft size={14} className="text-primary-400" />}
          color="primary.4"
          variant="light"
          onClick={() => navigate(-1)}
          m="lg"
        >
          Back
        </Button>
        <Divider size="xs" mx="md" />
        <div className="flex flex-col md:flex-row gap-5 justify-between">
          <Company />
          <SimilarCompanies />
        </div>
      </div>
    </div>
  );
};

export default CompanyPage;
