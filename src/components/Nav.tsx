/* Core */
import Link from 'next/link';
import styled from 'styled-components';

export const Nav: React.FC = () => {
    return (
        <>
            <nav>
                <Link href = '/'>
                    <StyledLink>Index</StyledLink>
                </Link>
                &nbsp;|&nbsp;
                <Link href = '/about'>
                    <StyledLink>About</StyledLink>
                </Link>
                &nbsp;|&nbsp;
                <Link href = '/material-1'>
                    <StyledLink>Material 1 </StyledLink>
                </Link>
                &nbsp;|&nbsp;
                <Link href = '/material-2'>
                    <StyledLink>Material 2</StyledLink>
                </Link>
                &nbsp;|&nbsp;
                <Link href = '/redux'>
                    <StyledLink>Redux</StyledLink>
                </Link>
                &nbsp;|&nbsp;
                <Link href = '/apollo-redux'>
                    <StyledLink>Apollo Redux</StyledLink>
                </Link>
                &nbsp;|&nbsp;
                <Link href = '/apollo-ssr'>
                    <StyledLink>Apollo SSR</StyledLink>
                </Link>
                &nbsp;|&nbsp;
                <Link href = '/apollo-ssg'>
                    <StyledLink>Apollo SSG</StyledLink>
                </Link>
            </nav>
            <hr />
        </>
    );
};

const StyledLink = styled.a`
    font-family: roboto mono, system-ui;
    font-size: 20px;
    font-weight: 700;
    color: palevioletred;
    cursor: pointer;

    &:hover {
        color: rebeccapurple;
    }
`;
