import style from "./About.module.css";

const About = () => {
  return (
    <div className={style.container}>
        <h1 className={style.title}>About</h1>
      <p className={style.content}>
        This app allows the client to view information about dogs to help
        themselves decide which dog they would like to have in their future.
        This app is very user friendly and allows the client to filter dogs
        based on behaviors and sort them from minimum to maximum weights.
        Even if you are not looking to adopt a dog in the near future, we
        encourage others to post dogs that are not yet available on our website
        and to include images of their own animals when posting a dog.
      </p>
    </div>
  );
};

export default About;
