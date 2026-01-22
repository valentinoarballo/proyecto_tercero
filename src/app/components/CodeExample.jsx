"use client"
import { useState } from "react";

export default function CodeExample({ code }) {

  const [visible, setVisible] = useState(false)

  return (
    <div className="border border-zinc-700 rounded-xl overflow-hidden">
      <button
      onClick={()=> setVisible(!visible) }
      className="w-full text-left px-4 py-1 bg-zinc-800 hover:bg-zinc-700 text-sm"
      >
        {visible ? "Hide code" : "Show code"}
      </button>

      {
        visible && (
          <pre className="p-4 bg-zinc-900 text-sm text-left overflow-x-auto">
            <code>
              {code}
            </code>
          </pre>
        )
      }

    </div>
  );
}