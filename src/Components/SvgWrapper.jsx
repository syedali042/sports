import styled from "styled-components";

export const SvgWrapper = styled.span`

& > svg {
    path{
        fill:none;
        stroke: ${p => p.svgColor}
    }
}

`

export const SvgWrapper2 = styled.span`
& > svg {
    path{
        fill:${p => p.svgColor};
        // stroke: 
    }
}
`