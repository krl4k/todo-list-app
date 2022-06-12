import React from "react";
const { ethers } = require("ethers");


function Account({account, setLogin}) {
    return (
        <div className={'flex mb-4 rounded-2xl bg-gray-800 p-5 w-full'}>
            <button className={'flex text-white hover:text-red-300'} onClick={() => setLogin(account)}>
                {account}
            </button>
        </div>
    )
}

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            accounts: [],
        }
    }

    async loadBlockchainData() {
        // If you don't specify a //url//, Ethers connects to the default
        // (i.e. ``http:/\/localhost:8545``)
        const provider = new ethers.providers.JsonRpcProvider();
        const accounts = await provider.listAccounts();

        this.setState({
            accounts: accounts,
        })
    }

    async componentDidMount() {
        await this.loadBlockchainData();
    }

    render() {
        return (
            <div className='h-full text-white w-4/5 mx-auto text-center'>
                <h1 className={'text-2xl font-bold  mb-4'}>Choose the account</h1>
                {this.state.accounts.map(acc =>
                    <span key={acc}>
                        <Account account={acc} setLogin={this.props.setLogin}/>
                    </span>
                )}
            </div>
        );
    }
}

export default Login;