import { Expand, Shrink } from "lucide-react";

export default function ImmersiveToggle({immersive, onToggle}) {
    return (
        <button onClick={onToggle}
                aria-label="Modo Imersivo"
                className=" fixed
                            bottom-4 
                            right-4 
                            z-50 
                            rounded-full 
                            bg-neutral-900
                            text-white
                            p-3
                            shadow-lg
                            hover:bg-neutral-800
                            transition 
                "       
        >
            {immersive ? <Shrink size={18} /> : <Expand size={18} />}
        </button>
    )
}