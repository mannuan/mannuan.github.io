fetch(
    "http://career.huawei.com/reccampportal/services/portal/portaluser/queryMyJobInterviewEvolve?reqTim=" +
      new Date().getTime()
  )
    .then(res => res.json())
    .then(t => {
      var e = null;
      var i = new JSEncrypt();
      function accDo(t) {
        var e =
            "MIICdgIBADANBgkqhkiG9w0BAQEFAASCAmAwggJcAgEAAoGBAIkTyksiGN6wLePyrLaSrJc2Vuc/",
          i =
            "7IBHmOwskpgUh3Qk+X1wgZlin/+nPfmIdjLUcPQgOGzsdVSnVA6fCst9d17PlxfyAWb8zR3u27WpsYotLmtl/DAzak29k06cU8pewBOltbfNCug3",
          r =
            "Cub1F6PjqAPur2Zt2BM6nxY2fB4KMpadAgMBAAECgYB02OrTGvCqOvITYlS5mNQIXei8XTBDtUR05hXcD3vblH0b4aCH2JtcuPpKUHm5IIB";
        (e += i),
          (t =
            (e += r) +
            "ciW6v4uytSamMgSQZjA0JBEgBPq0FlCNvGIurkwrg8U2rgAef2rhnW0oJ/9h/eucTjsccb1lqSYDHTlmgc3N/3VpyG1qY1o5lRT0DgOeavQJBAMIXT+nbdtaCRIAT2JGAutj0dlUpriTIOESAzZl+Td9u8lqIATwXpSjBoQENaqwNvr+06rC9/5CxqwKBaEXnK8sCQQC0zPdXv8jMk50H/gX8OMPfOnivWQ8ov1s7vkImMdJberpHwJzTB7z0YZWLs6zZ3R0F+3GNgUqnHNpOjUNrrso3AkEArBb3aCaKy89c5SKzlu9IvCyk7wWxvjM4kKSTp1DxwvYgNFz6m0lryyNDmidHOZ5GTrweiu8rtiORuPr8dV5u2QJALbOZ2i56XWv6x6hobucSa/zlwL0sXcpxD1r6cZkqaUFOkRCZE6bjFosMODIEwVVpHrf+bhx+eFuMu0pt/mxCZQJAab1XJRAmHkF+2OCRSoEeftjBEmggET9d2rVZIi/WW7KBlSpjaMWdVYUPfBAWzBpy5DgXonv4xpxZHXZkKEh8LA==");
        return t;
      }
   
      var key = accDo("hwreccamp");
      i.setPrivateKey(key);
      e = i.decryptLong2(t.cipherText);
      e = JSON.parse(decodeURIComponent(e));
      console.log(JSON.stringify(e, 0, 4));
    });