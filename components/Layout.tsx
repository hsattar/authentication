import { Provider } from 'react-redux'
import { storeConfig } from '../redux/store'
import ReusableHead from './ReusabeHead'

interface IProps { 
    children: React.ReactNode
}

export default function Layout({ children }: IProps) {
    return (
        <>
        <Provider store={storeConfig}>
            <ReusableHead />
            { children }
        </Provider>
        </>
    )
}