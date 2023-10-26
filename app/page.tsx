import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h2 className="font-extrabold text-2xl p-[1.5rem] mb-[3rem]">
        Welcome to the Issue App Page
      </h2>
      <p className="text-md p-[1rem]">
        Navigate to the Issue page on the nav to add an issue
      </p>
      <p className="text-red-600 font-bold text-lg mt-[2rem]">
        Pls note that this is an ongoing project that is still in development
        which would be completed anytime from now, But for now all you can see
        is the functionality of the backend tailored using server actions when
        the project is completerd you will be able to see all the issues you
        created on the the issue page. Thank you.. Planner
      </p>
    </div>
  );
}
