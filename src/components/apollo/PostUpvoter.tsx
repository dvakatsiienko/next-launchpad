/* Instruments */
import * as gql from '@/graphql';

export default function PostUpvoter({ votes, id }) {
    const [ updatePost ] = gql.useUpdatePostMutation();

    const upvotePost = () => {
        updatePost({
            variables: {
                id,
                votes: votes + 1,
            },
            optimisticResponse: {
                __typename: 'Mutation',
                updatePost: {
                    __typename: 'Post',
                    id,
                    votes:      votes + 1,
                },
            },
        });
    };

    return (
        <button onClick = { () => upvotePost() }>
            {votes}
            <style jsx>
                {`
                    button {
                        background-color: transparent;
                        border: 1px solid #e4e4e4;
                        color: #000;
                    }
                    button:active {
                        background-color: transparent;
                    }
                    button:before {
                        align-self: center;
                        border-color: transparent transparent #000000
                            transparent;
                        border-style: solid;
                        border-width: 0 4px 6px 4px;
                        content: '';
                        height: 0;
                        margin-right: 5px;
                        width: 0;
                    }
                `}
            </style>
        </button>
    );
}
