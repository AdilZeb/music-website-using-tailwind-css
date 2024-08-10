import React from "react";

const TimeLine = () => {
  return (
    <div className="min-w-screen-lg md:mx-20 mx-30 mt-20 dark:text-zinc-200 text-sky-900 ">
      <h2>Lineup</h2>
      <p>follow the time line so you dont miss the event</p>
      <div className="bg-zinc-800 py-4 px-2 relative w-full">
        <div className="absolute top-0 left-1/2 w-4 -ml-[8px] h-full rounded-full bg-gradient-to-t from-sky-900 to-teal900">
          <div className="sticky top-1/2">
            <div className="w-4 h-4 rounded-full relative">
              <div className="absolute bg-rose-500 w-4 h-4 rounded-full animate-ping"></div>
              <div className="relative bg-rose-500 w-4 h-4 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="text-xl bg-zinc-900 rounded-lg p-2 my-4  ">
              Ist July
            </h4>

            <div className="text-right">
              <div className="font-bold">MACKI CUSTON </div>
              <div className="text-zinc-400">6am- sage stage</div>
            </div>
          </div>
          <div></div>
          <div></div>
          <div>
            <div className="font-bold">MACKI CUSTON </div>
            <div className="text-zinc-400">6am- sage stage</div>
          </div>{" "}
          <div>
            <h4 className="text-xl bg-zinc-900 rounded-lg p-2 my-4  ">
              Ist July
            </h4>

            <div className="text-right">
              <div className="font-bold">MACKI CUSTON </div>
              <div className="text-zinc-400">6am- sage stage</div>
            </div>
          </div>
          <div></div>
          <div></div>
          <div>
            <div className="font-bold">MACKI CUSTON </div>
            <div className="text-zinc-400">6am- sage stage</div>
          </div>
        </div>
      </div>
      <h2 className="mt-20">TimeLine</h2>

      <table className=" border w-full mt-5 border-zinc-200 border-collapse">
        <thead className="text-xl font-bold">
          <td className="border border-zinc-500 p-3">Tickets</td>
          <td className="border border-zinc-500 p-3">Price </td>
        </thead>
        <tbody>
          <tr>
            <td className=" border border-zinc-500 px-3 py-2">
              Single Day Tickets
            </td>
            <td className=" border border-zinc-500 px-3 py-2">$300</td>
          </tr>{" "}
          <tr>
            <td className=" border border-zinc-500 px-3 py-2">7 Day Tickets</td>
            <td className=" border border-zinc-500 px-3 py-2">$3000</td>
          </tr>
        </tbody>
        <tfoot className="flex justify-center my-3">
          once gone alyaws gone
        </tfoot>
      </table>
    </div>
  );
};

export default TimeLine;
