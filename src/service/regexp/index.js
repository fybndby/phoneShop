import regList from './regList'

export default function (str, regType) {

    return regList[regType].test(str);
    //  regType正则验证

}