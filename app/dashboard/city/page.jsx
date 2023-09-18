import CommonDatePicker from "@/src/Components/DatePicker";
import FlightBookingDetails1 from "@/app/components/stepper";
import StepperCOM from "@/app/components/stepper";


const City = () => {
  return (
    <>
      <div>City</div>
      <div className="w-72">
        <CommonDatePicker className={""} title={"Select Your Start Date"} />

        <FlightBookingDetails1/>
      </div>
    </>
  );
};

export default City;
