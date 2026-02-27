import { useState } from "react";

const CommentForm = ({ articleTitle }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    try {
      const response = await fetch("/api/send-comment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          articleTitle,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage("Thanks. Your message was received.");
        setFormData({ name: "", email: "", comment: "" });
      } else {
        setStatus("error");
        setMessage(data.error || "Unable to send message. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Unable to send message. Please try again later.");
    }
  };

  return (
    <div className="mt-14 border-t border-zinc-300 dark:border-zinc-800 pt-10">
      <h3 className="text-2xl font-bold mb-6 text-black dark:text-white">Leave a note</h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm uppercase tracking-wide font-semibold mb-2 text-zinc-800 dark:text-zinc-100"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-zinc-500"
            placeholder="Your name"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm uppercase tracking-wide font-semibold mb-2 text-zinc-800 dark:text-zinc-100"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-zinc-500"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label
            htmlFor="comment"
            className="block text-sm uppercase tracking-wide font-semibold mb-2 text-zinc-800 dark:text-zinc-100"
          >
            Message
          </label>
          <textarea
            id="comment"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            required
            rows="5"
            className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-zinc-500 resize-none"
            placeholder="Share your perspective..."
          />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="px-6 py-3 bg-black text-white dark:bg-white dark:text-black hover:opacity-85 transition-opacity duration-200 disabled:opacity-60 disabled:cursor-not-allowed uppercase tracking-widest text-sm"
        >
          {status === "sending" ? "Sending..." : "Submit"}
        </button>

        {message && (
          <div
            className={`mt-3 p-4 border text-sm ${
              status === "success"
                ? "border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-900"
                : "border-zinc-400 dark:border-zinc-600 text-zinc-800 dark:text-zinc-100 bg-zinc-200 dark:bg-zinc-800"
            }`}
          >
            {message}
          </div>
        )}
      </form>
    </div>
  );
};

export default CommentForm;
