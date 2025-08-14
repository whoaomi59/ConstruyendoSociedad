import { Skull } from "lucide-react";

export default function Alert_Access() {
  return (
    <div class="container py-16">
      <div class="flex w-full rounded-lg border-l-[6px] border-red-500 bg-red-light-6 px-7 py-8 shadow-[0px_2px_10px_0px_rgba(0,0,0,0.08)] md:p-9">
        <div className="flexx">
          <Skull className="w-20 h-20 text-red-500" />
          <div class="w-full ml-2">
            <h1
              class="text-base font-semibold text-red-500"
              style={{
                fontSize: 35,
              }}
            >
              Sin Accesso
            </h1>
            <ul class="list-inside list-disc">
              <li class="text-base leading-relaxed text-red-light">
                Su acceso es limitado, contacta al administrador.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
