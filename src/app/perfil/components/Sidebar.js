'use client'
import {Sidebar} from "flowbite-react";
import {HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards} from 'react-icons/hi';

export default function MultiSidebar() {
    return (
        <section>
            <Sidebar aria-label="Sidebar with multi-level dropdown example">
                <Sidebar.Items>
                    <Sidebar.ItemGroup>
                        <Sidebar.Item
                            href="#"
                            icon={HiChartPie}
                        >
                            <p>
                                Perfil
                            </p>
                        </Sidebar.Item>
                        <Sidebar.Collapse
                            icon={HiShoppingBag}
                            label="Finanzas"
                        >
                            <Sidebar.Item href="#">
                                Ingresos/Gastos
                            </Sidebar.Item>
                            <Sidebar.Item href="#">
                                Settings
                            </Sidebar.Item>
                        </Sidebar.Collapse>
                        <Sidebar.Item
                            href="#"
                            icon={HiInbox}
                        >
                            <p>
                                Inbox
                            </p>
                        </Sidebar.Item>
                        <Sidebar.Item
                            href="#"
                            icon={HiUser}
                        >
                            <p>
                                Users
                            </p>
                        </Sidebar.Item>
                        <Sidebar.Item
                            href="#"
                            icon={HiShoppingBag}
                        >
                            <p>
                                Products
                            </p>
                        </Sidebar.Item>
                        <Sidebar.Item
                            href="#"
                            icon={HiArrowSmRight}
                        >
                            <p>
                                Sign In
                            </p>
                        </Sidebar.Item>
                        <Sidebar.Item
                            href="#"
                            icon={HiTable}
                        >
                            <p>
                                Sign Up
                            </p>
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>
        </section>
    );
}