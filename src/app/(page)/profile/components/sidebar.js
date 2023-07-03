'use client'
import {Sidebar} from "flowbite-react";
import {HiUser, HiOutlineLogout, HiCalculator, HiHeart} from 'react-icons/hi';
import Link from "next/link";
import {useRouter} from "next/navigation";


export default function MultiSidebar() {
    const router = useRouter();
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
                                router.push('#')
                            }}>
                                Settings
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
                            icon={HiOutlineLogout}
                        >
                            <p>
                                Sign Out
                            </p>
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>
        </section>
    );
}