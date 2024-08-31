import Container from "@/components/Container";
import BoxFive from "@/components/ServiceBox/BoxFive";
import BoxFour from "@/components/ServiceBox/BoxFour";
import BoxOne from "@/components/ServiceBox/BoxOne";
import BoxSeven from "@/components/ServiceBox/BoxSeven";
import BoxSix from "@/components/ServiceBox/BoxSix";
import BoxThree from "@/components/ServiceBox/BoxThree";
import BoxTwo from "@/components/ServiceBox/BoxTwo";
import RedService from "@/components/ServiceBox/RedService";

const ServiceSection = () => {
  return (
    <Container className="mb-12">
      <div className="flex flex-col justify-between items-center my-8 text-center space-y-5">
        <h1 className="text-4xl font-bold text-dark-gray">Our Services</h1>
        <p className="max-w-[80ch] text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          tempora omnis nulla, dignissimos perspiciatis facilis!
        </p>
      </div>
      <div className="grid grid-cols-12 gap-5">
        <BoxOne />
        <BoxTwo />
        <BoxThree />
        <BoxFour />
        <BoxFive />
        <BoxSix />
        <BoxSeven />
      </div>
      <RedService />
    </Container>
  );
};

export default ServiceSection;
