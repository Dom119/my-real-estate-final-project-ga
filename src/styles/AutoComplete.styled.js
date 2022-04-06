import styled from "styled-components";

export const StyledAutoCompletionButton = styled.div`
  /* position: fixed; */
  position: relative;
  padding: auto;

  input {
    /* border: 2px solid #999; */
    padding: 20px;
    border: none;
    background-color: ${({ theme }) => theme.colors.background};

    margin: auto;
  }
  .no-autocomplete {
    /* color: #999; */
    /* padding: 8px; */
    border-top-width: 0;
    list-style: none;
    margin-top: 0;
    max-height: 340px;
    overflow-y: scroll;
    padding-left: 0;
  }
  .autocomplete {
    /* border: 1px solid #999; */
    border-top-width: 0;
    list-style: none;
    margin-top: 0;
    max-height: 340px;
    overflow-y: scroll;
    padding-left: 0;
    /* width: calc(300px + 1rem); */
  }
  .autocomplete li {
    padding: 8px;
    background-color: ${({ theme }) => theme.colors.background};
  }
  .autocomplete > .active,
  .autocomplete li:hover {
    background-color: ${({ theme }) => theme.colors.background};
    cursor: pointer;
    font-weight: 700;
  }
  .autocomplete li:not(:last-of-type) {
    border-bottom: 1px solid #999;
  }
  ul {
    position: absolute;
    top: 65px;
    left: 0px;
  }
  input:focus {
    outline: none;
  }
`;
