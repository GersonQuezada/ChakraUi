import { AiOutlineRotateLeft } from "react-icons/ai";
import { BsQrCodeScan } from "react-icons/bs";
import { FiCompass, FiHome, FiSettings, FiStar, FiTrendingUp } from "react-icons/fi";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { MdOutlineInventory, MdSwipeDown } from "react-icons/md";
import { RiAiGenerate } from "react-icons/ri";

export function dashboardRoutes(): Router[] {
    return [
        { name: 'Activos y bienes de control', icon: RiAiGenerate , url: '/usuarios', category: 'main', permissions: [], available: true },
        { name: 'Generador de QR', icon: BsQrCodeScan, url: '/trending', category: 'main', permissions: [], available: true },
        { name: 'Movimiento de activos', icon: AiOutlineRotateLeft, url: '/explore', category: 'main', permissions: [], available: true },
        { name: 'Baja de activos', icon: MdSwipeDown , url: '/favourites', category: 'main', permissions: [], available: true },
        { name: 'Generación de toma de inventario', icon: MdOutlineInventory , url: '/settings', category: 'main', permissions: [], available: true },
        { name: 'Reportes', icon: HiOutlineDocumentReport , url: '/settings', category: 'main', permissions: [], available: true },        
         
    ];
}