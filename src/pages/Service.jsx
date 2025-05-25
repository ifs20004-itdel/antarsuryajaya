import Card from "../components/Card"
import Footer from "../components/Footer"
import service_prd from "../assets/images/service/product_engineer.jpg"
import service_web_sheefted from "../assets/images/service/web_sheetfed.jpg"
import service_bindery from "../assets/images/service/bindery.jpg"
import service_convert_finish from "../assets/images/service/converting_finishing.jpg"

const Service = () =>{
    return(
        <div className="font-poppins">
            <div className="w-3/4 py-12 m-auto">
                <div className="w-11/12 m-auto pb-10">
                    <h1 className="uppercase font-bold text-4xl text-center">Our Service</h1>
                    <hr className="h-0.5 my-8 bg-black border-0k" />
                    <div className="grid grid-cols-2 gap-10">
                        <Card
                            imgSource={service_prd}
                            title={"Product Engineering"}
                            description={"Kami akan membantu anda dalam mengembangkan solusi percetakan media dan paperpackaging yang ideal dan inovatif."}
                        />
                        <Card 
                            imgSource={service_web_sheefted}
                            title={"Web & Sheetfeed Press"}
                            description={"Kami ahlinya dalam mencetak koran, tabloid, majalah, buku, flier dengan segala ukuran dan bermacam jenis kertas."}
                        />
                        <Card 
                            imgSource={service_bindery}
                            title={"Bindery"}
                            description={"Proses penjilidan kami didukung dengan mesin lipat, mesin jilid kawat dan mesin jilid lem dengan output ribuan exemplar."}    
                        />
                        <Card 
                            imgSource={service_convert_finish}
                            title={"Converting & Finishing"}
                            description={"Divisi Converting dilengkapi dengan mesin canggih untuk memproduksi paper packaging yang paling rumit sekalipun."}    
                        />
                    </div>
                </div>
            </div>
            <div className="bg-blue-200 py-10 my-10">
                <div className="w-5/6 m-auto flex flex-row justify-between items-center">
                    <p className="uppercase text-xl w-2/4">Tertarik dengan layanan kami? Hubungi kami sekarang untuk penawaran terbaik!</p>
                    <a href="mailto:marketing@percetakansurya.com" className="uppercase bg-blue-300 px-5 py-3 shadow rounded">
                        Contact Us
                    </a>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Service