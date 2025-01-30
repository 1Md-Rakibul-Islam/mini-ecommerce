"use client";

import { FormEvent } from "react";

const LeaveReplayForm = () => {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div data-aos="fade-up" className="mt-60p">
      <h5 className="heading-5 text-w-neutral-1 mb-32p">Leave a Reply</h5>
      <form onSubmit={onSubmit}>
        <div className="grid grid-cols-8 gap-30p mb-30p">
          <div className="sm:col-span-4 col-span-8">
            <input
              className="box-input-1"
              type="text"
              id="name"
              placeholder="Enter Your Name"
            />
          </div>
        </div>
        <button type="submit" className="btn btn-xl btn-primary rounded-12">
          Submit Comments
        </button>
      </form>
    </div>
  );
};

export default LeaveReplayForm;
