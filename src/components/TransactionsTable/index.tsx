import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {

    useEffect(() => {
        api.get('transactions')
            .then(response => console.log(response.data))
    }, []);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>liuasgd asdga syig</td>
                        <td className="deposit">R$ 1500,00</td>
                        <td>A iusgd igsd </td>
                        <td>15/12/2021</td>
                    </tr>
                    <tr>
                        <td>liuasgd asdga syig</td>
                        <td className="deposit">R$ 500,00</td>
                        <td>A iusgd igsd </td>
                        <td>16/12/2021</td>
                    </tr>
                    <tr>
                        <td>liuasgd asdga syig</td>
                        <td className="withdraw">R$ 230,00</td>
                        <td>A iusgd igsd </td>
                        <td>17/12/2021</td>
                    </tr>
                    <tr>
                        <td>liuasgd asdga syig</td>
                        <td className="deposit">R$ 120,00</td>
                        <td>A iusgd igsd </td>
                        <td>18/12/2021</td>
                    </tr>
                    <tr>
                        <td>liuasgd asdga syig</td>
                        <td className="withdraw">R$ 300,00</td>
                        <td>A iusgd igsd </td>
                        <td>14/12/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}