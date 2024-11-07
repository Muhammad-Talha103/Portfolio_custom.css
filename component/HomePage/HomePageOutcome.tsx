import Image1 from "@/images/image1.png";
import Image2 from "@/images/image2.png";
import Image3 from "@/images/image3.png";
import Image from "next/image";
import "./HomePageOutcome.css";
interface DataItem {
  image: string;
  title: string;
  description: string;
}

const data = [
  {
    image: Image1.src,
    title: "Expertise in Frontend Development",
    description:
      "With a strong background in HTML, CSS, and JavaScript frameworks, including Next.js and Tailwind CSS.",
  },
  {
    image: Image2.src,
    title: "Tailored Solutions",
    description:
      "I understand that every project is unique. I work closely with you to develop customized solutions that align with your specific goals and vision.",
  },
  {
    image: Image3.src,
    title: "Focus on User Experience",
    description:
      "I prioritize creating intuitive interfaces that engage users and drive conversions, ensuring your website not only looks great but also performs well.",
  },
];

const Item = ({ image, title, description }: DataItem) => (
  <div className="item-container">
    <Image
      src={image}
      alt={title}
      className="item-image"
      width={500}
      height={500}
    />
    <h1 className="item-title">{title}</h1>
    <p className="item-description">{description}</p>
  </div>
);

const HomePageOutCome = () => {
  return (
    <div className="outcome-container">
      <h1 className="outcome-title">Why Hire Us?</h1>
      <div className="outcome-grid">
        {data.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default HomePageOutCome;