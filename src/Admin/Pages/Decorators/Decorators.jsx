import { MoreHorizontal, Star, Plus } from "lucide-react";

const Decorators = () => {
  return (
    <div className="w-full p-6 lg:p-10">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Decorators</h1>
          <p className="text-base-content/60">
            Manage and organize all decorators on the platform.
          </p>
        </div>

        <button
          className="btn bg-[#8E6CE4] hover:bg-[#7d5bd6] text-white rounded-xl px-5"
        >
          <Plus size={18} /> Add Decorator
        </button>
      </div>

      {/* TABLE CONTAINER */}
      <div className="bg-base-100 rounded-2xl shadow-sm border border-base-200 overflow-hidden">

        {/* TABLE HEADER */}
        <div className="grid grid-cols-12 px-6 py-4 text-sm font-semibold text-base-content/70 bg-base-50">
          <div className="col-span-1"></div>
          <div className="col-span-4">DECORATOR</div>
          <div className="col-span-2">RATING</div>
          <div className="col-span-3">STATUS</div>
          <div className="col-span-2 text-right">ACTIONS</div>
        </div>

        {/* ROW 1 */}
        <div className="grid grid-cols-12 px-6 py-5 items-center border-t border-base-200 hover:bg-base-50 transition">
          <input type="checkbox" className="checkbox col-span-1" />

          <div className="col-span-4 flex items-center gap-3">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-medium">Olivia Martin</p>
              <p className="text-sm text-base-content/60">olivia.m@example.com</p>
            </div>
          </div>

          <div className="col-span-2 flex items-center gap-1">
            <Star size={18} className="text-yellow-400" />
            <span className="font-medium">4.9</span>
          </div>

          <div className="col-span-3">
            <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-600">
              Approved
            </span>
          </div>

          <div className="col-span-2 text-right">
            <button className="btn btn-ghost btn-sm">
              <MoreHorizontal />
            </button>
          </div>
        </div>

        {/* ROW 2 */}
        <div className="grid grid-cols-12 px-6 py-5 items-center border-t border-base-200 hover:bg-base-50 transition">
          <input type="checkbox" className="checkbox col-span-1" />

          <div className="col-span-4 flex items-center gap-3">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-medium">Liam Harris</p>
              <p className="text-sm text-base-content/60">liam.h@example.com</p>
            </div>
          </div>

          <div className="col-span-2 flex items-center gap-1">
            <Star size={18} className="text-yellow-400" />
            <span className="font-medium">4.7</span>
          </div>

          <div className="col-span-3">
            <span className="px-3 py-1 text-sm rounded-full bg-orange-100 text-orange-600">
              Pending
            </span>
          </div>

          <div className="col-span-2 text-right">
            <button className="btn btn-ghost btn-sm">
              <MoreHorizontal />
            </button>
          </div>
        </div>

        {/* ROW 3 */}
        <div className="grid grid-cols-12 px-6 py-5 items-center border-t border-base-200 hover:bg-base-50 transition">
          <input type="checkbox" className="checkbox col-span-1" />

          <div className="col-span-4 flex items-center gap-3">
            <img
              src="https://randomuser.me/api/portraits/women/12.jpg"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-medium">Sophia Chen</p>
              <p className="text-sm text-base-content/60">sophia.c@example.com</p>
            </div>
          </div>

          <div className="col-span-2 flex items-center gap-1">
            <Star size={18} className="text-yellow-400" />
            <span className="font-medium">4.8</span>
          </div>

          <div className="col-span-3">
            <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-600">
              Approved
            </span>
          </div>

          <div className="col-span-2 text-right">
            <button className="btn btn-ghost btn-sm">
              <MoreHorizontal />
            </button>
          </div>
        </div>

        {/* ROW 4 */}
        <div className="grid grid-cols-12 px-6 py-5 items-center border-t border-base-200 hover:bg-base-50 transition">
          <input type="checkbox" className="checkbox col-span-1" />

          <div className="col-span-4 flex items-center gap-3">
            <img
              src="https://randomuser.me/api/portraits/men/45.jpg"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-medium">Noah Taylor</p>
              <p className="text-sm text-base-content/60">noah.t@example.com</p>
            </div>
          </div>

          <div className="col-span-2 flex items-center gap-1">
            <Star size={18} className="text-yellow-400" />
            <span className="font-medium">4.5</span>
          </div>

          <div className="col-span-3">
            <span className="px-3 py-1 text-sm rounded-full bg-red-100 text-red-600">
              Disabled
            </span>
          </div>

          <div className="col-span-2 text-right">
            <button className="btn btn-ghost btn-sm">
              <MoreHorizontal />
            </button>
          </div>
        </div>

        {/* FOOTER */}
        <div className="flex justify-between items-center px-6 py-4 border-t border-base-200 text-sm">
          <p className="text-base-content/60">
            Showing 1–4 of 24 decorators
          </p>

          {/* PAGINATION */}
          <div className="flex items-center gap-2">
            <button className="btn btn-xs btn-ghost">&lt;</button>

            <button className="btn btn-xs bg-[#8E6CE4] text-white rounded-md">
              1
            </button>
            <button className="btn btn-xs btn-ghost">2</button>
            <button className="btn btn-xs btn-ghost">3</button>
            <span>…</span>
            <button className="btn btn-xs btn-ghost">8</button>
            <button className="btn btn-xs btn-ghost">9</button>

            <button className="btn btn-xs btn-ghost">&gt;</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Decorators;
