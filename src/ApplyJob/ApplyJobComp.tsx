import {
  Button,
  Divider,
  FileInput,
  NumberInput,
  Textarea,
  TextInput,
  Notification,
  LoadingOverlay,
} from "@mantine/core";
import { IconCheck, IconPaperclip } from "@tabler/icons-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ApplyJobComp = () => {
  const [preview, setPreview] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [sec, setSec] = useState(5);
  const navigate = useNavigate();
  const handlePreview = () => {
    setPreview(!preview);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = () => {
    setSubmit(true);
    let x = 5;
    setInterval(() => {
      x--;
      setSec(x);
      if (x === 0) {
        navigate("/find-jobs");
      }
    }, 1000);
  };
  return (
    <>
      <LoadingOverlay
        visible={submit}
        zIndex={1000}
        overlayProps={{ radius: "sm", blur: 2 }}
        loaderProps={{ color: "primary.4", type: "bars" }}
        className="!fixed"
      />
      <div className="w-full md:w-2/3 mx-auto">
        <div className="flex gap-2 items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white-800 rounded-xl">
              <img src={`/Icons/Google.png`} alt="" className="h-12 md:h-20" />
            </div>
            <div>
              <div className="font-semibold text-2xl md:text-3xl">
                Software Engineer
              </div>
              <div className="text-md text-white-300">
                Google &#9679; 3 Days Ago &#9679; 90 Applicants
              </div>
            </div>
          </div>
        </div>
        <Divider my="xl" />
        <div className="text-xl font-semibold text-white-200 mb-5">
          Submit Your Application
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col md:flex-row gap-5 md:gap-10 md:[&>*]:w-1/2">
            <TextInput
              label="Full Name"
              placeholder="Enter Full Name"
              withAsterisk
              size="lg"
              readOnly={preview}
              variant={preview ? "unstyled" : "default"}
              className={`${preview ? "text-white-300 font-semibold" : ""}`}
            />
            <TextInput
              label="Email"
              placeholder="Enter Email"
              withAsterisk
              size="lg"
              readOnly={preview}
              variant={preview ? "unstyled" : "default"}
              className={`${preview ? "text-white-300 font-semibold" : ""}`}
            />
          </div>
          <div className="flex flex-col md:flex-row gap-5 md:gap-10 md:[&>*]:w-1/2">
            <NumberInput
              label="Phone Number"
              placeholder="Enter Phone Number"
              withAsterisk
              hideControls
              min={0}
              max={9999999999}
              clampBehavior="strict"
              size="lg"
              readOnly={preview}
              variant={preview ? "unstyled" : "default"}
              className={`${preview ? "text-white-300 font-semibold" : ""}`}
            />
            <TextInput
              label="Personal Website"
              placeholder="Enter Url"
              withAsterisk
              size="lg"
              readOnly={preview}
              variant={preview ? "unstyled" : "default"}
              className={`${preview ? "text-white-300 font-semibold" : ""}`}
            />
          </div>
          <FileInput
            leftSection={<IconPaperclip />}
            label="Attach your CV"
            placeholder="Your CV"
            leftSectionPointerEvents="none"
            withAsterisk
            size="lg"
            readOnly={preview}
            variant={preview ? "unstyled" : "default"}
            className={`${preview ? "text-white-300 font-semibold" : ""}`}
          />
          <Textarea
            placeholder="Let us know why you are a good fit."
            label="Cover Letter"
            autosize
            minRows={2}
            size="lg"
            readOnly={preview}
            variant={preview ? "unstyled" : "default"}
            className={`${preview ? "text-white-300 font-semibold" : ""}`}
          />

          {!preview && (
            <Button
              color="primary.4"
              variant="light"
              size="lg"
              onClick={handlePreview}
            >
              Preview
            </Button>
          )}
          {preview && (
            <div className="flex gap-10 [&>*]:w-1/2">
              <Button
                color="primary.4"
                variant="outline"
                size="lg"
                onClick={handlePreview}
                fullWidth
              >
                Edit
              </Button>
              <Button
                color="primary.4"
                variant="light"
                size="lg"
                onClick={handleSubmit}
                fullWidth
              >
                Submit
              </Button>
            </div>
          )}
        </div>
      </div>
      <Notification
        icon={<IconCheck size={20} />}
        color="teal"
        title="Application Submitted!"
        mt="md"
        withCloseButton={false}
        withBorder
        className={`!border-primary-400 !fixed top-0 left-[39%] -translate-y-24 transition duration-300 ease-in-out z-[1001] ${
          submit ? "translate-y-0" : ""
        }`}
      >
        You will be redirected to the Find Jobs page in {sec} seconds...
      </Notification>
    </>
  );
};

export default ApplyJobComp;
