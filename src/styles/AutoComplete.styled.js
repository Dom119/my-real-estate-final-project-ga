import styled from "styled-components";

export const StyledAutoCompletionButton = styled.div`
  input {
    border: 1px solid #999;
    padding: 8px;
    width: 300px;
  }
  .no-autocomplete {
    color: #999;
    padding: 8px;
  }
  .autocomplete {
    border: 1px solid #999;
    border-top-width: 0;
    list-style: none;
    margin-top: 0;
    max-height: 143px;
    overflow-y: auto;
    padding-left: 0;
    width: calc(300px + 1rem);
  }
  .autocomplete li {
    padding: 8px;
  }
  .autocomplete > .active,
  .autocomplete li:hover {
    background-color: darkgray;
    cursor: pointer;
    font-weight: 700;
  }
  .autocomplete li:not(:last-of-type) {
    border-bottom: 1px solid #999;
  }
`;