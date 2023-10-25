"use client";
import { Modal } from "@/components/ui/modal";
import { useStoreModal } from "@/hooks/use-store-modal";
import { useEffect } from "react";

const SetupPage = () => {
    const onOpen = useStoreModal((state) => state.onOpen);
    const isOpen = useStoreModal((state) => state.isOpen);

    useEffect(()=>{
      if(!isOpen){
        onOpen();
      }
    }, [ isOpen, onOpen]);

    return null;
    //   <div className="p-4">
    //     {/* <Modal title="Test" description="Test desc" isOpen onClose={()=>{}}>
    //     Children
    //     </Modal>   */}
    //     Root page
    //   </div>
    // );
}

export default SetupPage;