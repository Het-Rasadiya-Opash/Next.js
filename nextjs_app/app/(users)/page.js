import { DialogDemo } from "@/components/DialogDemo";
import DrawerDemo from "@/components/Drawer";

export default async function Home() {
    return(
        <div>
            <h1>Home Page</h1>
            <section>
                {/* <DialogDemo/> */}
                <DrawerDemo/>
            </section>
        </div>
    )
}