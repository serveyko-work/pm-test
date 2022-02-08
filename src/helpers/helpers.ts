interface rT {
  newQueryString: string,
  targetUrl: string | null
}

const retrieveTarget = (queryString: string): rT => {
  let targetUrl = null;
  const regex = /(&)*targetUrl=\((.*)\)/gi;
  const match = queryString.match(regex);
  if (match != null && match.length > 0) {
    queryString = queryString.replace(regex, '');
    targetUrl = match[0].replace(/(^(&)*targetUrl=\()|(\))/gi, '');
  }
  return {
    newQueryString: queryString,
    targetUrl
  }
}

export const getQueryParams = (queryString: string): any => {
  const queryObj: { [key: string]: string } = {};
  const {newQueryString, targetUrl} = retrieveTarget(queryString);
  queryString = newQueryString;
  const queryArray = queryString.replace('?', '').split('&');
  queryArray.forEach((item) => {
    const itemArray = item.split('=');
    queryObj[itemArray[0]] = itemArray[1];
  });
  if (targetUrl != null && targetUrl.trim() !== '') {
    queryObj.targetUrl = targetUrl;
  }

  return queryObj;
};