import { useLoaderData } from "react-router-dom";

const About = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      {data.posts.map((item) => (
        <h2 key={item.id}>{item.title}</h2>
      ))}
    </div>
  );
};

export default About;
