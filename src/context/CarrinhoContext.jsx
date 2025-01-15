const { createContext } = require("react");

export const CarrinhoContext = createContext();

export const CarrinhoProvider = ({children}) => {
    return (
        <CarrinhoContext.Provider>
            {children}
        </CarrinhoContext.Provider>
    )
}