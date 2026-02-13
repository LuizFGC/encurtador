import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "@/pages/login";
import Registro from "@/pages/registro";
import Perfil from "@/pages/perfil";
import Encurtar from "@/pages/encurtar";
import { ProtectedRoute } from "@/components/ProtectedRoute";

export default function App() {
    const Auth = true;

    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Login />} />

                <Route element={<ProtectedRoute isAllowed={Auth} />}>
                    <Route path="/registro" element={<Registro />} />

                    <Route
                        path="/perfil"
                        element={
                            <Perfil
                                links={34}
                                cliques={342}
                                User={{
                                    nome: "Luiz Filipe",
                                    email: "Luizfkz3@gmail.com",
                                    dataMembro: new Date().toLocaleDateString("pt-BR"),
                                }}
                            />
                        }
                    />

                    <Route
                        path="/dashboard"
                        element={
                            <Encurtar
                                Links={[
                                    {
                                        newUrl: "http://localhost:5173/jf7899s",
                                        url: "https://reactrouter.com/start/framework/installation",
                                        cliques: 76,
                                        data: new Date().toLocaleDateString("pt-BR"),
                                    },
                                    {
                                        newUrl: "http://localhost:5173/asc89s",
                                        url: "https://chatgpt.com/c/698f0966-bd90-8333-9231-9ec67f0e7a39",
                                        cliques: 76,
                                        data: new Date().toLocaleDateString("pt-BR"),
                                    },
                                    {
                                        newUrl: "http://localhost:5173/lssm906",
                                        url: "https://www.rocketseat.com.br/",
                                        cliques: 76,
                                        data: new Date().toLocaleDateString("pt-BR"),
                                    },
                                ]}
                            />
                        }
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
