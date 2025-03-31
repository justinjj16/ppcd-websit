'use client';
import { useEffect, useRef, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import PublicLayout from '@/components/PublicLayout/PublicLayout';
import Loading from "@/components/Loading";
import { validateToken } from "@/lib/api";

const Welcome = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [formLoading, setFormLoading] = useState<boolean>(false);

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const tokenFromURL = searchParams.get('token');

    if (tokenFromURL) {
      setToken(tokenFromURL);
    } else {
      router.push("/");
    }
  }, [searchParams]);

  useEffect(() => {
    (async () => {
      if (token) {
        try {
          setLoading(true)
          const result = await validateToken(token)
          console.log("result", result)
        } catch (e) {
          console.log("fffff", e)
        } finally {
          setLoading(false)
        }
      }
    })();
  }, [token]);


  if (loading) {
    return <Loading />;
  }



  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
    event,
  ) => {
    const formData = new FormData(event.currentTarget);
    event.preventDefault();
    const name = formData.get("name");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const address = formData.get("address");
    const guestof = formData.get("guestof");
    const memberOf = formData.get("memberOf");

    const vistForFirstTime = formData.get("vistForFirstTime");
    const likeMoreAboutChurch = formData.get("likeMoreAboutChurch");
    const likeVisitFromPastor = formData.get("likeVisitFromPastor");
    const note = formData.get("note");


    setFormLoading(true)
    // try {
    //   await sendContactForm({ name, email, message });
    //   formRef.current.reset();
    //   setValidationFirstNumber(Math.floor(Math.random() * 20));
    //   setValidationSecondNumber(Math.floor(Math.random() * 20));
    //   setToastData({
    //     type: "sucess",
    //     message:
    //       "Message was successfully send. We will get back to you ASAP via email.",
    //   });
    // } catch (err) {
    //   setToastData({ type: "error", message: err.message });
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <PublicLayout>
      <div className="pt-16"></div>
      <form className="container mt-12" onSubmit={handleSubmit} ref={formRef}>
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2">
            <div className="mb-8">
              <label
                htmlFor="name"
                className="mb-3 block text-sm font-medium text-dark dark:text-white"
              >
                Full Name
              </label>
              <input
                required
                type="text"
                name="name"
                placeholder="Enter your name"
                className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
              />
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2">
            <div className="mb-8">
              <label
                htmlFor="phone"
                className="mb-3 block text-sm font-medium text-dark dark:text-white"
              >
                Phone
              </label>
              <input
                required
                type="text"
                name="phone"
                placeholder="Enter your Phone"
                className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
              />
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2">
            <div className="mb-8">
              <label
                htmlFor="email"
                className="mb-3 block text-sm font-medium text-dark dark:text-white"
              >
                Email
              </label>
              <input
                required
                type="email"
                name="email"
                placeholder="Enter your Email"
                className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
              />
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2">
            <div className="mb-8">
              <label
                htmlFor="address"
                className="mb-3 block text-sm font-medium text-dark dark:text-white"
              >
                Address
              </label>
              <input
                required
                type="text"
                name="address"
                placeholder="Enter your Address"
                className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
              />
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2">
            <div className="mb-8">
              <label
                htmlFor="guestof"
                className="mb-3 block text-sm font-medium text-dark dark:text-white"
              >
                I am a Guest of
              </label>
              <input
                required
                type="text"
                name="guestof"
                placeholder="I am a Guest of "
                className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
              />
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2">
            <div className="mb-8">
              <label
                htmlFor="memberOf"
                className="mb-3 block text-sm font-medium text-dark dark:text-white"
              >
                I am a Member of  **** Church
              </label>
              <input
                required
                type="text"
                name="memberOf"
                placeholder="I am a Guest of "
                className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
              />
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2 flex items-center">
            <div className="mb-8">
              <label
                htmlFor="vistForFirstTimeId"
                className="flex cursor-pointer select-none items-center text-sm font-medium text-dark dark:text-white"
              >
                <div className="relative">
                  <input
                    type="checkbox"
                    id="vistForFirstTimeId"
                    className="sr-only"
                    name="vistForFirstTime"
                  />
                  <div className="box mr-4 flex h-5 w-5 items-center justify-center rounded border border-body-color border-opacity-20 dark:border-white dark:border-opacity-10">
                    <span className="opacity-0">
                      <svg
                        width="11"
                        height="8"
                        viewBox="0 0 11 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                          fill="#30d33e"
                          stroke="#30d33e"
                          strokeWidth="0.4"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                Visitor for first time
              </label>
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2 flex items-center">
            <div className="mb-8">
              <label
                htmlFor="likeMoreAboutChurchId"
                className="flex cursor-pointer select-none items-center text-sm font-medium text-dark dark:text-white"
              >
                <div className="relative">
                  <input
                    type="checkbox"
                    id="likeMoreAboutChurchId"
                    className="sr-only"
                    name="likeMoreAboutChurch"
                  />
                  <div className="box mr-4 flex h-5 w-5 items-center justify-center rounded border border-body-color border-opacity-20 dark:border-white dark:border-opacity-10">
                    <span className="opacity-0">
                      <svg
                        width="11"
                        height="8"
                        viewBox="0 0 11 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                          fill="#30d33e"
                          stroke="#30d33e"
                          strokeWidth="0.4"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                Would like to know more about church
              </label>
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2 flex items-center">
            <div className="mb-8">
              <label
                htmlFor="likeVisitFromPastorId"
                className="flex cursor-pointer select-none items-center text-sm font-medium text-dark dark:text-white"
              >
                <div className="relative">
                  <input
                    type="checkbox"
                    id="likeVisitFromPastorId"
                    className="sr-only"
                    name="likeVisitFromPastor"
                  />
                  <div className="box mr-4 flex h-5 w-5 items-center justify-center rounded border border-body-color border-opacity-20 dark:border-white dark:border-opacity-10">
                    <span className="opacity-0">
                      <svg
                        width="11"
                        height="8"
                        viewBox="0 0 11 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                          fill="#30d33e"
                          stroke="#30d33e"
                          strokeWidth="0.4"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                Would like a visit from Pastor
              </label>
            </div>
          </div>

          <div className="w-full px-4">
            <div className="mb-8">
              <label
                htmlFor="note"
                className="mb-3 block text-sm font-medium text-dark dark:text-white"
              >
                Note
              </label>
              <textarea
                required
                name="note"
                rows={3}
                placeholder="Enter your Note"
                className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
              ></textarea>
            </div>
          </div>

          <div className="w-full px-4">
            <button
              type="submit"
              disabled={formLoading}
              className="flex rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
            >
              {formLoading ? (
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="mr-2 animate-spin"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"></path>
                </svg>
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </div>
      </form>
    </PublicLayout>
  );
};

export default Welcome;
