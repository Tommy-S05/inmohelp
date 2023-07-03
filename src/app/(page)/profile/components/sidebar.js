'use client'
import {Sidebar} from "flowbite-react";
import {HiUser, HiOutlineLogout, HiCalculator, HiHeart} from 'react-icons/hi';

export default function MultiSidebar() {
    return (
        <section>
            <Sidebar aria-label="Sidebar with multi-level dropdown example">
                <Sidebar.Items>
                    <Sidebar.ItemGroup>
                        <Sidebar.Collapse
                            icon={HiUser}
                            label="Perfil"
                        >
                            <Sidebar.Item href="/profile">
                                Información Personal
                            </Sidebar.Item>
                            <Sidebar.Item href="/profile/edit-profile">
                                Editar Perfil
                            </Sidebar.Item>
                        </Sidebar.Collapse>
                        <Sidebar.Collapse
                            icon={HiCalculator}
                            label="Finanzas"
                        >
                            <Sidebar.Item href="/profile/financials">
                                Ingresos/Gastos
                            </Sidebar.Item>
                            <Sidebar.Item href="#">
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