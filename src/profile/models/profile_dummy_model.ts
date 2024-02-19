export type TransactionModel = {
    id: number;
    buyerName: string;
    purchasedProducts: {
        id: number;
        qty: number;
    }[];
}

// Dummy transactions data
export const dummyTransactions: TransactionModel[] = [
    {
        id: 1,
        buyerName: "Indro",
        purchasedProducts: [
            {
                id: 2,
                qty: 1
            },
            {
                id: 1,
                qty: 1
            }
        ]
    },
    {
        id: 2,
        buyerName: "Suwarno",
        purchasedProducts: [
            {
                id: 10,
                qty: 1
            }
        ]
    },
    {
        id: 3,
        buyerName: "Indra",
        purchasedProducts: [
            {
                id: 9,
                qty: 1
            },
            {
                id: 12,
                qty: 2
            },
            {
                id: 10,
                qty: 1
            },
            {
                id: 14,
                qty: 3
            }
        ]
    },
    {
        id: 4,
        buyerName: "Sutoyo",
        purchasedProducts: [
            {
                id: 2,
                qty: 1
            },
            {
                id: 1,
                qty: 1
            }
        ]
    },
    {
        id: 5,
        buyerName: "Indro",
        purchasedProducts: [
            {
                id: 2,
                qty: 1
            },
            {
                id: 1,
                qty: 1
            }
        ]
    },
    {
        id: 6,
        buyerName: "Suwarno",
        purchasedProducts: [
            {
                id: 10,
                qty: 1
            }
        ]
    },
    {
        id: 7,
        buyerName: "Indra",
        purchasedProducts: [
            {
                id: 9,
                qty: 1
            },
            {
                id: 12,
                qty: 2
            },
            {
                id: 10,
                qty: 1
            },
            {
                id: 14,
                qty: 3
            }
        ]
    },
    {
        id: 8,
        buyerName: "Sutoyo",
        purchasedProducts: [
            {
                id: 2,
                qty: 1
            },
            {
                id: 1,
                qty: 1
            }
        ]
    },
    {
        id: 9,
        buyerName: "Indro",
        purchasedProducts: [
            {
                id: 2,
                qty: 1
            },
            {
                id: 1,
                qty: 1
            }
        ]
    },
    {
        id: 10,
        buyerName: "Suwarno",
        purchasedProducts: [
            {
                id: 10,
                qty: 1
            }
        ]
    },
    {
        id: 11,
        buyerName: "Indra",
        purchasedProducts: [
            {
                id: 9,
                qty: 1
            },
            {
                id: 12,
                qty: 2
            },
            {
                id: 10,
                qty: 1
            },
            {
                id: 14,
                qty: 3
            }
        ]
    },
    {
        id: 12,
        buyerName: "Sutoyo",
        purchasedProducts: [
            {
                id: 2,
                qty: 1
            },
            {
                id: 1,
                qty: 1
            }
        ]
    },
];