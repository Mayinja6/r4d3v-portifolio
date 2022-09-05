import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useToasts } from "react-toast-notifications";

const Contact = () => {
  const { addToast } = useToasts();
  const form = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const REACT_APP_SERVICE_ID = "service_rvridil";
  const REACT_APP_PUBLIC_KEY = "yeqHa-FdoADafMywK";
  const REACT_APP_TEMPLATE_ID = "template_6m7dxz9";

  const sendEmail = e => {
    e.preventDefault();

    if (name === "") {
      addToast("Name field is required", {
        appearance: "error",
        autoDismiss: true,
      });
      return;
    }
    if (email === "") {
      addToast("Email Address is required", {
        appearance: "error",
        autoDismiss: true,
      });
      return;
    }
    if (subject === "") {
      addToast("What's the  Conversation About?", {
        appearance: "error",
        autoDismiss: true,
      });
      return;
    }
    if (message === "") {
      addToast("Message is required", {
        appearance: "error",
        autoDismiss: true,
      });
      return;
    } else if (message.length < 30) {
      addToast("Message is too Short", {
        appearance: "error",
        autoDismiss: true,
      });
      return;
    }

    addToast("Sending...", {
      appearance: "info",
      autoDismiss: true,
    });

    emailjs
      .sendForm(
        REACT_APP_SERVICE_ID,
        REACT_APP_TEMPLATE_ID,
        form.current,
        REACT_APP_PUBLIC_KEY
      )
      .then(
        result => {
          addToast("Email Sent Successfully", {
            appearance: "success",
            autoDismiss: true,
          });
        },
        error => {
          console.log(error);
          addToast(error.status === 0 && "Poor Internet Connection", {
            appearance: "error",
            autoDismiss: true,
          });
        }
      );
  };

  return (
    <section className="mb-10 pt-[96px] p-3 sm:p-10">
      <div className="mx-auto  px-4 sm:px-5 md:px-8 lg:px-10">
        <div className="text-center">
          <h2 className="section-title-h2">Contact</h2>
          <p className="mb-0">
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        <div>
          <iframe
            style={{ border: "0", width: "100%", height: "270px" }}
            title="Contact Iframe"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>

        <div className="md:flex mt-10">
          <div className="mt-5">
            <div className="info">
              <div className="address">
                <i className="fa-solid fa-map"></i>
                <h4 className="mb-[5px] font-semibold text-[22px] pl-16">
                  Location:
                </h4>
                <p className="pl-16 text-[14px] mb-0 text-[#555555]">
                  A108 Adam Street, New York, NY 535022
                </p>
              </div>

              <div className="email">
                <i className="fa-regular fa-envelope"></i>
                <h4 className="mb-[5px] font-semibold text-[22px] pl-16">
                  Email:
                </h4>
                <p className="pl-16 text-[14px] mb-0 text-[#555555]">
                  info@example.com
                </p>
              </div>

              <div className="phone">
                <i className="fa-solid fa-mobile"></i>
                <h4 className="mb-[5px] font-semibold text-[22px] pl-16">
                  Call:
                </h4>
                <p className="pl-16 text-[14px] mb-0 text-[#555555]">
                  +1 5589 55488 55s
                </p>
              </div>
            </div>
          </div>

          <div className="w-full mt-5 md:pl-10">
            <form className="p-2 md:p-8" ref={form} onSubmit={sendEmail}>
              <div className="md:grid md:grid-cols-2 items-center md:gap-3">
                <div>
                  <input
                    type="text"
                    className="rounded-md  text-[14px]  h-[44px] w-full pl-3 mb-5 md:mb-3 border shadow-sm border-slate-300 focus:outline-none focus:border-[#34b7a7] focus:ring-[#34b7a7] focus:ring-1"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                    onChange={e => setName(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    className="rounded-md text-[14px] h-[44px] w-full  placeholder:pl-3  mb-3 border shadow-sm border-slate-300 focus:outline-none focus:border-[#34b7a7] focus:ring-[#34b7a7] focus:ring-1"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className=" pb-2 mt-3">
                <input
                  type="text"
                  className="rounded-md  text-[14px]  h-[44px] w-full  placeholder:pl-3 border shadow-sm border-slate-300 focus:outline-none focus:border-[#34b7a7] focus:ring-[#34b7a7] focus:ring-1"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  onChange={e => setSubject(e.target.value)}
                />
              </div>
              <div className=" pb-2 mt-3">
                <textarea
                  className=" rounded-md  text-[14px]  py-[10px] px-3 w-full  placeholder:pl-3 border shadow-sm border-slate-300 focus:outline-none focus:border-[#34b7a7] focus:ring-[#34b7a7] focus:ring-1"
                  name="message"
                  rows="5"
                  placeholder="Message"
                  onChange={e => setMessage(e.target.value)}
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-[#34b7a7] border-none pt-[10px] pb-3 px-[30px] text-[#fff] rounded-[50px] hover:bg-[#3dc8b7]"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <style>
        {`
          .info i {
            font-size: 20px;
            color: #34b7a7;
            float: left;
            width: 44px;
            height: 44px;
            background: #effbf9;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50px;
            transition: all 0.3s ease-in-out;
          }

          .email,
          .phone {
          margin-top: 40px;
          }

          .email:hover i,
          .address:hover i,
          .phone:hover i {
          background: #34b7a7;
          color: #fff;
}
        `}
      </style>
    </section>
  );
};

export default Contact;
