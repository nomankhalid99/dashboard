import React from "react";
import DashboardLayout from "../../components/DashboardLayout";
import SupportCard from "./components/SupportCard";
import ContactCard from "./components/ContactCard";
import { MdEmail } from "react-icons/md";
import { BiSolidMessageRounded } from "react-icons/bi";
import InfoCard from "../Dashboard/components/InfoCard";
import { Stack } from "@chakra-ui/react";

const Support = () => {
  return (
    <DashboardLayout title="Support">
     <Stack spacing='50px'>
     <SupportCard
        icon={MdEmail}
        leftcomponent={<ContactCard />}
        title="Contact Us"
        text=" Have a question or just want to know more? Feel free to reach out to
          us"
      />
      <SupportCard
        icon={BiSolidMessageRounded}
        leftcomponent={
          <InfoCard
            imgUrl="\purplebg.svg"
            text="Learn more about our real estate, mortgage, and  corporate account services"
            tagText="Contact"
            inverted={true}
          />
        }
        title="Live Chat"
        text=" Don't have time to wait for answer? Chat with us now."
      />
     </Stack>
    </DashboardLayout>
  );
};

export default Support;
