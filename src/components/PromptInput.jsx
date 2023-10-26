'use client'

import { useState } from "react"
import useSWR from "swr";
import fetchSuggestion from "../../lib/fetchSuggestion";

function PromptInput() {

    const [input, setinput] = useState('');

    const {data:suggestion , isLoading , mutate , isValidating} = useSWR('/api/suggestion' , fetchSuggestion ,{
        revalidateOnFocus:false
    })

    return (
        <section className="m-10">
            <form className="flex flex-col lg:flex-row shadow-md shadow-slate-400/10 border rounded-md lg:divide-x">
                <textarea
                    value={input}
                    onChange={(e) => setinput(e.target.value)}
                    placeholder="Enter a prompt..."
                    className="flex-1 p-4 rounded-md outline-blue-400" name="" id=""></textarea>

                <button 
                disabled={!input}
                type="submit" 
                className={`p-4 font-semibold ${input ? 'bg-blue-800 text-white transition-colors duration-200' 
                : 'text-gray-300 cursor-not-allowed'}`}
                >Generate</button>

                <button
                    type="button"
                    className="p-4 bg-blue-400 text-white transition-colors duration-200 font-semibold
            disabled:cursor-not-allowed disabled:bg-gray-400">Use Suggestion</button>
                <button
                    type="button"
                    className="p-4 bg-white text-blue-400 transition-colors duration-200 font-semibold
            rounded-b-md md:rounded-r-md md:rounded-bl-none">New Suggestion</button>
            </form>
        </section>
    )
}

export default PromptInput