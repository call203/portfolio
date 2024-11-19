export const Contact = () => {
  return (
    <div
      className="bg-white px-5 py-3 rounded-lg text-blackmd:text-base text-sm "
      style={{ borderColor: "#71717a", borderWidth: "1px" }}
    >
      <div className=" relative inline-block mb-2">
        <span className="relative z-10 font-black text-zinc-500 md:text-lg ">
          Contact.
        </span>
        <span className="absolute left-0 bottom-0 w-full h-2 bg-yellow-300 opacity-70 rounded-sm z-0"></span>
      </div>

      <div className="pb-1">
        <span className="font-semibold">Email : </span> freeyeon96@gmail.com
      </div>
      <div className="pb-1">
        <span className="font-semibold">Github : </span>{" "}
        <a className="border-b-2" href="https://github.com/call203">
          https://github.com/call203
        </a>
      </div>
      <div className="pb-1">
        <span className="font-semibold">Blog : </span>{" "}
        <a className="border-b-2" href="https://medium.com/@freeyeon96">
          https://medium.com/@freeyeon96
        </a>
      </div>
      <div className="pb-1">
        <span className="font-semibold">LinkedIn : </span>{" "}
        <a
          className="border-b-2"
          href="https://www.linkedin.com/in/soyeon-lee-b74353239/"
        >
          https://www.linkedin.com/in/soyeon-lee-b74353239/
        </a>
      </div>
    </div>
  );
};
