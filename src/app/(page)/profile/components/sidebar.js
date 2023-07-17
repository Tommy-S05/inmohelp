'use client'
import {Sidebar} from "flowbite-react";
import {HiUser, HiOutlineLogout, HiCalculator, HiHeart} from 'react-icons/hi';
import {useRouter} from "next/navigation";
import {useAuth} from "@/app/hooks/auth";


export default function MultiSidebar() {
    const router = useRouter();
    const {logout} = useAuth();
    const handleLogout = async(e) => {
        e.preventDefault();
        await logout();
    }
    return (
        <section>
            <Sidebar aria-label="Sidebar with multi-level dropdown example">
                <Sidebar.Items>
                    <Sidebar.ItemGroup>
                        <Sidebar.Collapse
                            icon={HiUser}
                            label="Perfil"
                        >
                            <Sidebar.Item href="#" onClick={(e) => {
                                e.preventDefault();
                                router.push('/profile')
                            }}>
                                Información Personal
                            </Sidebar.Item>
                            <Sidebar.Item href="#" onClick={(e) => {
                                e.preventDefault();
                                router.push('/profile/edit-profile')
                            }}>
                                Editar Perfil
                            </Sidebar.Item>
                        </Sidebar.Collapse>
                        <Sidebar.Collapse
                            icon={HiCalculator}
                            label="Finanzas"
                        >
                            <Sidebar.Item href="#" onClick={(e) => {
                                e.preventDefault();
                                router.push('/profile/financials')
                            }}>
                                Ingresos/Gastos
                            </Sidebar.Item>
                            <Sidebar.Item href="#" onClick={(e) => {
                                e.preventDefault();
                                router.push('/profile/financials/settings')
                            }}>
                                Configuraciones
                            </Sidebar.Item>
                        </Sidebar.Collapse>
                        <Sidebar.Item
                            href="#"
                            icon={HiHeart}
                        >
                            <p>
                                Favoritos
                            </p>
                        </Sidebar.Item>
                        <Sidebar.Item
                            href="#"
                            onClick={handleLogout}
                            icon={HiOutlineLogout}
                        >
                            <p>
                                Cerrar sesión
                            </p>
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>
        </section>
    );
}