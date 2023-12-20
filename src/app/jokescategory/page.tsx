import FormCategoryFetch from "@/components/FormCategory"

const JokeCategoryPage = () => {
    return (
        <section className="flex justify-center items-center">
            <div className=" flex flex-col items-center w-4/5 h-fit md:h-screen bg-zinc-400 mx-auto"
            >
                <h2 className="text-sm md:text-3xl m-5 text-center text-orange-300"
                >Escolha uma categoria para seu fato curioso</h2>
            <FormCategoryFetch />
            </div>
        </section>
    )
}

export default JokeCategoryPage