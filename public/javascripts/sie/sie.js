/*SIE-SVG without Plugin under LGPL2.1 & GPL2.0 & Mozilla Public Lisence
 *公式ページは http://sie.sourceforge.jp/
 *利用方法は <script defer="defer" type="text/javascript" src="sie.js"></script>
 *http://sie.sourceforge.jp/
 *Usage: <script defer="defer" type="text/javascript" src="sie.js"></script>
 */
/* ***** BEGIN LICENSE BLOCK *****
 * Version: MPL 1.1/GPL 2.0/LGPL 2.1
 *
 * The contents of this file are subject to the Mozilla Public License Version
 * 1.1 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 * http://www.mozilla.org/MPL/
 *
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 * for the specific language governing rights and limitations under the
 * License.
 *
 * The Original Code is the Mozilla SVG Cairo Renderer project.
 *
 * The Initial Developer of the Original Code is IBM Corporation.
 * Portions created by the Initial Developer are Copyright (C) 2004
 * the Initial Developer. All Rights Reserved.
 *
 * Parts of this file contain code derived from the following files(s)
 * of the Mozilla SVG project (these parts are Copyright (C) by their
 * respective copyright-holders):
 *    layout/svg/renderer/src/libart/nsSVGLibartBPathBuilder.cpp
 *
 * Contributor(s):DHRNAME revulo bellbind
 *
 * Alternatively, the contents of this file may be used under the terms of
 * either of the GNU General Public License Version 2 or later (the "GPL"),
 * or the GNU Lesser General Public License Version 2.1 or later (the "LGPL"),
 * in which case the provisions of the GPL or the LGPL are applicable instead
 * of those above. If you wish to allow use of your version of this file only
 * under the terms of either the GPL or the LGPL, and not to allow others to
 * use your version of this file under the terms of the MPL, indicate your
 * decision by deleting the provisions above and replace them with the notice
 * and other provisions required by the GPL or the LGPL. If you do not delete
 * the provisions above, a recipient may use your version of this file under
 * the terms of any one of the MPL, the GPL or the LGPL.
 *
 * ***** END LICENSE BLOCK ***** */
/*
 * Copyright (c) 2000 World Wide Web Consortium,
 * (Massachusetts Institute of Technology, Institut National de
 * Recherche en Informatique et en Automatique, Keio University). All
 * Rights Reserved. This program is distributed under the W3C's Software
 * Intellectual Property License. This program is distributed in the
 * hope that it will be useful, but WITHOUT ANY WARRANTY; without even
 * the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR
 * PURPOSE.
 * See W3C License http://www.w3.org/Consortium/Legal/ for more details.
 */﻿

// File: http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/dom.idl
/*W3CのDOMのIDLを参照にコードを起こしている
 *変数やプロパティ、メソッドの名前の頭に、「_」がついているときはSIE独自のもの
 */
/*
#ifndef _DOM_IDL_
#define _DOM_IDL_

#pragma prefix "w3c.org"
module dom
{

  valuetype DOMString sequence<unsigned short>;

  typedef   unsigned long long DOMTimeStamp;

  interface DocumentType;
  interface Document;
  interface NodeList;
  interface NamedNodeMap;
  interface Element;
*/
function DOMException(n){
 Error.apply(this, arguments);
 this.code = n;
 var s = [
   "", //数合わせのため
   "Index Size Error",
   "DOMString Size Error",
   "Hierarchy Request Error",
   "Wrong　Document　Error",
   "Invalid　Character　Error",
   "No Data Allowed　Error",
   "No Modification Allowed Error",
   "Not Found Error",
   "Not Supported　Error",
   "Inuse　Attribute　Error",
   "Invalid State　Error",
   "Syntax Error",
   "Invalid Modification　Error",
   "Namespace Error",
   "Invalid Access Error"
 ];
 this.message = s[n];
 return this;
/*DOMSTRING_SIZE_ERR
テキストの指定された範囲がDOMStringに合致しない。 2
HIERARCHY_REQUEST_ERR
コードが属さない場所に挿入されている。 3
INDEX_SIZE_ERR
インデクス若しくは大きさが負数，又は許された値よりも大きい。 1
INUSE_ATTRIBUTE_ERR
他で既に使用されている属性を追加しようとしている。 10
INVALID_ACCESS_ERR，DOM水準2で導入 
パラメタ又は操作が基礎になるオブジェクトによってサポートされていない。 15
INVALID_CHARACTER_ERR
名前の中などで，妥当でない又は不正な文字が指定されている。文法に合った文字の定義についてはXML規定の 生成規則2 を，文法に合った名前文字については 生成規則5 を参照すること。5 
INVALID_MODIFICATION_ERR，DOM水準2で導入 
基礎となるオブジェクトの型を修正しようとしている。 13
INVALID_STATE_ERR，DOM水準2で導入 
利用不可能又はもはや利用可能ではないオブジェクトを使用しようとしている。 11
NAMESPACE_ERR，DOM水準2で導入 
名前空間に関して正しくない方法でオブジェクトを生成又は変更しようとしている。 14
NOT_FOUND_ERR
ノードが存在しない文脈でそのノードを参照しようとしている。 8
NOT_SUPPORTED_ERR
実装は，オブジェクト又は操作の要求された型をサポートしていない。9 
NO_DATA_ALLOWED_ERR
データをサポートしないノードに対してデータを指定している。 6
NO_MODIFICATION_ALLOWED_ERR
修正が許されない場所でオブジェクトを修正しようとしている。 7
SYNTAX_ERR，DOM水準2で導入 
妥当ではない又は不正な文字列が指定されている。 12
WRONG_DOCUMENT_ERR
ノードを生成した文書以外の(そのノードをサポートしない)異なる文書で，ノードが使用されている。4
*/
};
(function(t) {
t.INDEX_SIZE_ERR                 = 1;
t.DOMSTRING_SIZE_ERR             = 2;
t.HIERARCHY_REQUEST_ERR          = 3;
t.WRONG_DOCUMENT_ERR             = 4;
t.INVALID_CHARACTER_ERR          = 5;
t.NO_DATA_ALLOWED_ERR            = 6;
t.NO_MODIFICATION_ALLOWED_ERR    = 7;
t.NOT_FOUND_ERR                  = 8;
t.NOT_SUPPORTED_ERR              = 9;
t.INUSE_ATTRIBUTE_ERR            = 10;
t.INVALID_STATE_ERR              = 11;
t.SYNTAX_ERR                     = 12;
t.INVALID_MODIFICATION_ERR       = 13;
t.NAMESPACE_ERR                  = 14;
t.INVALID_ACCESS_ERR             = 15;
t.prototype = new Error();
})(DOMException);

/*DOMImplementation
 *DOMの基本的な機能をつかさどる
 */
DOMImplementation = {
    /* hasFeature
     *文字列によって、機能をサポートしているかどうかをチェックする。削除不可。
     */
    /*boolean*/ hasFeature : function(/*string*/ feature, version) {
      switch (feature) {
        case "CORE" :
        case "XML" :
        case "Events" :              //DOM level2 Eventを参照
        case "StyleSheets" :         //DOM level2 StyleSheetを参照
        case "org.w3c.svg.static" :  //SVG1.1の仕様を参照
        case "org.w3c.dom.svg.static" :
          return true;
        default :
          if (version === "2.0") {   //DOM level2 Coreにおいて策定されたバージョン情報
            return true;
          } else {
            return false;
          }
      }
    },

    /* createDocumentType
     *ドキュメントタイプを作るためのもの。削除可。
     */
    /*DocumentType*/ createDocumentType : function(/*string*/ qualifiedName, publicId, systemId) {
      var s = new Node();
      s.publicId = publicId;
      s.systemId = systemId;
      return s;
    },
    /* createDocument
     * ドキュメントオブジェクトを作るためのもの。削除不可。
     */
    /*Document*/ createDocument : function( /*string*/ ns, qname, /*DocumentType*/ doctype) {
      try {
        var s;
        if (ns) {
          s = new (DOMImplementation[ns].Document);
          this._doc_ && (s._document_ = this._doc_);          //_document_プロパティはcreateElementNSメソッドやradialGradient要素やNAIBU._setPaintなどで使う
        } else {
          s = new Document();
        }
        s.implementation = this;
        s.doctype = doctype;
        s.documentElement = s.createElementNS(ns,qname); //ルート要素を作る
        return s;
      } catch(e){alert(e.message);}
    },
    "http://www.w3.org/2000/xmlns": {}
};

/* Node
 *ノード（節）はすべての雛形となる重要なものである。削除不可。
 */

function Node(){
  this.childNodes = [];
  this._capter = []; //eventで利用
  return this;
}
(function(t) {
// NodeType
/*const unsigned short*/  t.ELEMENT_NODE                   = 1;
/*const unsigned short*/  t.ATTRIBUTE_NODE                 = 2;
/*const unsigned short*/  t.TEXT_NODE                      = 3;
/*const unsigned short*/  t.CDATA_SECTION_NODE             = 4;
/*const unsigned short*/  t.ENTITY_REFERENCE_NODE          = 5;
/*const unsigned short*/  t.ENTITY_NODE                    = 6;
/*const unsigned short*/  t.PROCESSING_INSTRUCTION_NODE    = 7;
/*const unsigned short*/  t.COMMENT_NODE                   = 8;
/*const unsigned short*/  t.DOCUMENT_NODE                  = 9;
/*const unsigned short*/  t.DOCUMENT_TYPE_NODE             = 10;
/*const unsigned short*/  t.DOCUMENT_FRAGMENT_NODE         = 11;
/*const unsigned short*/  t.NOTATION_NODE                  = 12;
})(Node);
Node.prototype = {
  //以下は初期値として設定
  tar : null,
  firstChild : null,
  previousSibling : null,
  nextSibling : null,
  attributes : null,
  namespaceURI : null,
  localName : null,
  lastChild : null,
  prefix : null,
  ownerDocument : null,
  parentNode : null,
/*replaceChildメソッド
 *指定したoldChildノードの代わりに、新たなnewChildノードを入れる。切り替え機能。
 */
/*Node*/ replaceChild : function( /*Node*/ newChild, oldChild) {
  this.insertBefore(newChild, oldChild);
  var s = this.removeChild(oldChild);
  return s;
},
/*appendChildメソッド
 *eleノードをリストの最後尾に追加する
 */
/*Node*/ appendChild : function( /*Node*/ ele) {
  this.insertBefore(ele,null);
  return ele;
},
/*hasChildNodesメソッド
 *子ノードがあるかどうか
 */
/*boolean*/ hasChildNodes : function() {
  if (this.childNodes.length > 0) {
    return true;
  } else {
    return false;
  }
},
/*cloneNodeメソッド
 *ノードのコピーを作る。引数は、子ノードのコピーも作るかどうか。コピー機能。
 */
/*Node*/ cloneNode : function( /*boolean*/ deep) {
  var s;
  if (this.hasOwnProperty("ownerDocument")) {
    s = this.ownerDocument.importNode(this, deep);
  } else {
    s = new Node();
  }
  return s;
},
/*normalizeメソッド
 *二つ以上の重複したテキストノードを一つにまとめる
 */
/*void*/ normalize : function() {
  var tcn = this.childNodes;
  try {
  for (var i=tcn.length-1;i<0;--i) {
    var tcni = tcn[i], tcnip = tcni.nextSibling;
    if (tcnip) {
      if (tcni.nodeType === Node.TEXT_NODE && tcnip.nodeType === Node.TEXT_NODE) {
        tcni.appendData(tcnip.data);    //次ノードの文字列データを、現ノード文字列の後に付け加える
        tcni.legnth = tcni.data.length;
        this.removeChild(tcnip);        //次ノードを排除
      } else {
        tcni.normalize();
      }
    } else {
      tcni.normalize();
    }
  }
  } catch(e){};
},
/*isSupportedメソッド
 *どんな機能をサポートしているかどうかをチェック
 */
/*boolean*/ isSupported : function( /*string*/ feature, version) {
  return (this.ownerDocument.implementation.hasFeature(feature+"", version+""));
},
/*hasAttributesメソッド
 *ノードが属性を持っているかどうか
 */
/*boolean*/ hasAttributes : function() {
  if (this.attributes.length > 0) {
    return true;
  } else {
    return false;
  }
}
};


Array.prototype.item = function( /*long*/ index) {
  return (this[index]);
};
/*ノードリストはArrayで代用。
  interface NodeList {
    Node               item(in unsigned long index);
    readonly attribute unsigned long    length;
  };
*/

/*NamedNodeMap
 *ノードの集合。ノードリストと違って、順序が決まっていない。削除不可
 */
function NamedNodeMap() {
  return this;
}
/*_copyNode
 *cloneNodeを行う際に、用いる。削除不可
 */
Array.prototype._copyNode = function __nnmp_c( /*NamedNodeMap*/ children, /*boolean*/ deep) {
  for (var i=0,cli=children.length;i<cli;i++) {
    this[i] = children[i].cloneNode(deep);
  }
};

NamedNodeMap.prototype = {
 /*number*/ length : 0,
/*
 *名前空間に対応していないメソッドは、軽量化のため、機能させないようにする。代わりに、**NSメソッドを利用すること
 */
/*Node*/ getNamedItem : function(/*string*/ name){
  },
/*Node*/ setNamedItem : function(/*Node*/ arg){
  },
/*Node*/ removeNamedItem : function(/*string*/ name){
  },
/*Node*/ item : function( /*long*/ index) {
    return this[index];
  },
/*getNamedItemNSメソッド
 *名前空間と名前を使って、ノードの集合から特定のノードを取り出す
 */
/*Node*/ getNamedItemNS : function(/*string*/ namespaceURI, /*string*/ localName) {
    var ta;
    for (var i=0,tali=this.length;i<tali;i++) {
      ta = this[i];
      if (ta.namespaceURI === namespaceURI && ta.localName === localName) { //名前空間と名前がそれぞれ一致すれば
        this._num = i;                                                      //場所をいったん記録しておく。（setNamedItemNSで使う）
        return ta;
      }
    }
    i = ta = null;
    return null;
  },
/*setNamedItemNSメソッド
 *ノードの集合に特定のノードを設定
 */
/*Node*/ setNamedItemNS : function(/*Node*/ arg) {
    var tgans = this.getNamedItemNS(arg.namespaceURI, arg.localName),
        s;
    if (tgans) {                          //ノードがすでにあるならば、
      s = this[this._num];
      this[this._num] = arg;
      arg = tgans = null;
      return s;
    } else {
      if (arg.ownerElement !== void 0) { //ノードがもはや別の要素で使われている
        throw (new DOMException(DOMException.INUSE_ATTRIBUTE_ERR));
      }
      this[this.length] = arg;            //新たに、argを項目として追加する
      this.length +=  1;
      arg = null;
      return null;
    }
  },
/*removeNamedItemNSメソッド
 *名前空間と名前を使って、ノードの集合から特定のノードを排除
 */
/*Node*/ removeNamedItemNS : function(/*string*/ namespaceURI, /*string*/ localName) {
    var tgans = this.getNamedItemNS(namespaceURI, localName);
    if (!tgans) {                          //ノードが見当たらない場合、
      throw (new DOMException(DOMException.NOT_FOUND_ERR));
    } else {
      var s = this[this._num];
      delete (this[this._num]);
      this.length -= 1;
      tgas = null;
      return s;
    }
  },
  _copyNode : Array.prototype._copyNode //上記のArrayの_copyNodeを参照
};

/*CharacterData
 *文字データ。Textノードなどの元となる。削除不可。
 */
function CharacterData(){
 Node.apply(this);
 return this;
};
CharacterData.prototype = new Node();                    //ノードのプロトタイプチェーンを作って、継承
CharacterData.constructor = Node;
CharacterData.prototype.length = 0;
/*substringDataメソッド
 *offsetから数えてcount分の文字列を取り出す
 */
/*string*/ CharacterData.prototype.substringData = function(/*long*/ offset, /*long*/ count) {
  if (offset < 0 || count < 0 || offset > this.length) { //値が負か、データの長さよりoffsetが長いとき、サイズエラーを起こす
    throw (new DOMException(INDEX_SIZE_ERR));
  }
  if (offset + count > this.length) {                    //offsetとcountの和が文字全体の長さを超える場合、offsetから最後までのを取り出す
    count = this.length - offset;
  }
  var s = this.data.substr(offset, count);
  return s;
};
/*void*/ CharacterData.prototype.replaceData = function( /*long*/ offset, /*long*/ count, /*string*/ arg) {
  if (offset < 0 || count < 0 || offset > this.length) { //値が負か、データの長さよりoffsetが長いとき、サイズエラーを起こす
    throw (new DOMException(INDEX_SIZE_ERR));
  }
  this.deleteData(offset, count);
  this.insertData(offset, arg);
};

/*Attr
 *属性ノード。削除不可。
 */
function Attr() {
  Node.apply(this);
  delete this._capter;
  return this;
};
Attr.prototype = new Node();                    //ノードのプロトタイプチェーンを作って、継承
Attr.constructor = Node;
Attr.prototype.nodeType = Node.ATTRIBUTE_NODE;
Attr.prototype.nodeValue = null;

/*Element
 *要素ノード。削除不可。
 */
function Element() {
  Node.apply(this);
  this.attributes = new NamedNodeMap();          //属性を収納
  return this;
};
Element.prototype = new Node();                  //ノードのプロトタイプチェーンを作って、継承
Element.constructor = Node;
Element.prototype.nodeType = Node.ELEMENT_NODE;
Element.prototype.nodeValue = null;
/*
 *名前空間に対応していないメソッドは、軽量化のため、機能させないようにする。代わりに、**NSメソッドを利用すること
 *(getAttributeとsetAttributeは普及しているので機能させる
 */
/*string*/ Element.prototype.getAttribute = function( /*string*/ name) {
  return (this.getAttributeNS(null, name));
};
/*void*/ Element.prototype.setAttribute = function( /*string*/ name, /*string*/ value) {
  this.setAttributeNS(null, name, value);
};
/*void*/ Element.prototype.removeAttribute = function( /*string*/ name) {
  this.removeAttributeNS(null, name);
};
/*Attr*/ Element.prototype.getAttributeNode = function( /*string*/ name) {
};
/*Attr*/ Element.prototype.setAttributeNode = function( /*Attr*/ newAttr) {
};
/*Attr*/ Element.prototype.removeAttributeNode = function( /*Attr*/ oldAttr) {
  var s = this.attributes.removeNamedItemNS(oldAttr.namespaceURI, oldAttr.localName);  //attributesから該当するノードを排除
  return s;
};
/*NodeList(Array)*/ Element.prototype.getElementsByTagName = function( /*string*/ name) {
};
/*string*/ Element.prototype.getAttributeNS = function( /*string*/ namespaceURI, /*string*/ localName) {
  var n = this.getAttributeNodeNS(namespaceURI, localName);                      //属性ノードを取得する
  if (!n) {
    return null;
  } else {
    return (n.nodeValue);
  }
};
/*void*/ Element.prototype.setAttributeNS = function( /*string*/ namespaceURI, /*string*/ qualifiedName, /*string*/ value) {
  var atn = this.ownerDocument.createAttributeNS(namespaceURI, qualifiedName);
  /*元来、string型以外の型を許容すべきではないが、他のブラウザ（FirefoxやOpera)でエラーが出ないため許容する*/
  atn.nodeValue = value+"";
  atn.value = value+"";
  this.setAttributeNodeNS(atn);
};
/*void*/ Element.prototype.removeAttributeNS = function( /*string*/ namespaceURI, /*string*/ localName) {
};
/*Attr*/ Element.prototype.getAttributeNodeNS = function( /*string*/ namespaceURI, /*string*/ localName) {
  var s = this.attributes.getNamedItemNS(namespaceURI,localName);
  return s;
};
/*NodeList(Array)*/ Element.prototype.getElementsByTagNameNS = function( /*string*/ namespaceURI, /*string*/ localName) {
  var s = [], n = 0;
  var tno = this.childNodes;
  for (var i=0,tcli = tno.length;i<tcli;i++) {
    var tnoi = tno[i];
    if (tnoi.nodeType === Node.ELEMENT_NODE) {
      var ns = (namespaceURI === "*") ? tnoi.namespaceURI : namespaceURI;
      var ln = (localName === "*") ? tnoi.localName : localName;
      if((tnoi.namespaceURI === ns) && (tnoi.localName === ln)) {
        s[n] = tnoi;
        n++;
      }
      var d = tnoi.getElementsByTagNameNS(namespaceURI, localName);
      if (d) {
        for (var j=0,dli=d.length;j<dli;++j) {
          s[s.length] = d[j];
        }
        n += d.length;
      }
      ns = ln = d = null;
    }
  }
  tno = i = j = tcli = dli = null;
  if (n === 0) {
    return null; //該当する要素なし
  }
  return s;
};
/*boolean*/ Element.prototype.hasAttribute = function( /*string*/ name) {
  return (this.hasAttributeNS("http://www.w3.org/2000/svg", name));
};
/*boolean*/ Element.prototype.hasAttributeNS = function( /*string*/ namespaceURI, /*string*/ localName) {
  if (this.getAttributeNodeNS(namespaceURI, localName)) { //ノードの取得に成功した場合
   return true;
  } else {
   return false;
  }
};

/*Text
 *テキストノード。削除不可。
 */
function Text() {
  return this;
};
Text.prototype = new CharacterData();                       //文字データのプロトタイプチェーンを作って、継承
Text.constructor = CharacterData;
Text.prototype.nodeType = Node.TEXT_NODE;
Text.prototype.nodeName = "#text";
/*Text*/ Text.prototype.splitText = function(/*long*/ offset) {
  var pre = this.substringData(0, offset - 1);              //このノードからoffsetまでの文字列を取り出して、
  this.replaceData(0, this.length - 1, pre);                //このノードの文字列と置き換える
  var next = "";
  if (this.length !== offset) {                             //このノードの文字列の長さがoffsetに等しくない場合
    next = this.substringData(offset, this.length - 1);     //文字列を取り出す。（等しい場合は文字列を取り出さない）
  }
  var nnode = this.ownerDocument.createTextNode(next);
  if (this.parentNode) {
    this.parentNode.insertBefore(nnode, this.nextSibling);
  }
  return nnode;
};

/*Comment
 *コメントノード。<!-- --!>で表現される。削除不可。
 */
function Comment() {
  return this;
};
Comment.prototype = new CharacterData();                    //文字データのプロトタイプチェーンを作って、継承
Comment.constructor = CharacterData;
Comment.prototype.nodeType = Node.COMMENT_NODE;
Comment.prototype.nodeName = "#comment";
/*CDATASection
 *CDATA領域を示すノード。<![CDATA[ ]]!>で表現される。削除不可。
 */
function CDATASection() {
  this.nodeType = Node.CDATA_SECTION_NODE;
  this.nodeName = "#cdata-section";
  return this;
};
CDATASection.prototype = new Text();                        //テキストノードのプロトタイプチェーンを作って、継承
CDATASection.constructor = Text;

/*DocumentType
 *DTD（文書型定義）の情報を取り扱うノード。DTDは<!DOCTYPE[ ]>で表現されうる。削除可
 */
function DocumentType() {
  //以下のメンバは削除可
  this.name = "";
  this.entities = new NamedNodeMap();   //パラメタ実体を除く実体の集まり
  this.notations = new NamedNodeMap();  //DTDで示した記法の集まり
  this.publicId = "";                   //外部サブセットの公開識別子
  this.systemId = "";                   //上同のシステム識別子
  this.internalSubset = "";             //内部サブセットの内容（文字列）
  this.nodeValue = null;
  this.nodeType = Node.DOCUMENT_TYPE_NODE;
  return this;
};
DocumentType.prototype = new Node();   //ノードのプロトタイプチェーンを作って、継承
DocumentType.constructor = Node;

/*Notation
 *DTDの記法の情報を取り扱うノード。<!NOTATION >か、処理命令で記法は表現されうる。削除可
 */
function Notation() {
  this.publicId = null;
  this.systemId = null;
  this.nodeValue = null;
  this.nodeType = Node.NOTATION_NODE;
  return this;
};
Notation.prototype = new Node();  //ノードのプロトタイプチェーンを作って、継承
Notation.constructor = Node;

/*注意
 *以下のノードは、もし、DOMを展開する前に、XMLプロセッサが実体参照の読み込みを行うのであれば、文書中に挿入される必要はない。
 */
/*Entity
 *解析対象（外）実体ノード。削除可
 */
function Entity() {
  this.publicId = null;
  this.systemId = null;
  this.notationName = null;      //解析対象外実体のための記法名。解析対象実体ではnull
  this.nodeValue = null;
  this.nodeType = Node.ENTITY_NODE;
  return this;
};
Entity.prototype = new Node();  //ノードのプロトタイプチェーンを作って、継承
Entity.constructor = Node;

/*EntityReference
 *実態参照の代わりに挿入されるノード。削除可
 */
function EntityReference() {
  this.nodeValue = null;
  this.nodeType = Node.ENTITY_REFERENCE_NODE ;
  return this;
};
EntityReference.prototype = new Node();  //ノードのプロトタイプチェーンを作って、継承
EntityReference.constructor = Node;

/*ProcessingInstruction
 *処理命令ノード。スタイルシート処理命令で使うので、削除不可
 */
function ProcessingInstruction() {
  this.nodeType = Node.PROCESSING_INSTRUCTION_NODE;
  return this;
};
ProcessingInstruction.prototype = new Node();  //ノードのプロトタイプチェーンを作って、継承
ProcessingInstruction.constructor = Node;

/*DocumentFragment
 *複数のノードを移したりするのに便宜上、用いられる文書ノード。削除可
 */
function DocumentFragment() {
  this.nodeName = "#document-fragment";
  this.nodeValue = null;
  this.nodeType = Node.DOCUMENT_FRAGMENT_NODE;
  return this;
};
DocumentFragment.prototype = new Node();  //ノードのプロトタイプチェーンを作って、継承
DocumentFragment.constructor = Node;

/*Document
 *文書ノード。
 */
function Document() {
  this.nodeName = "#document";
  this.nodeValue = null;
  this.nodeType = Node.DOCUMENT_NODE;
  this._id = {};  //getElementByIdで使う
  return this;
};
Document.prototype = new Node();  //ノードのプロトタイプチェーンを作って、継承
Document.constructor = Node;

/*
 *名前空間に対応していないメソッドは、軽量化のため、機能させないようにする。代わりに、**NSメソッドを利用すること。
 *また、createメソッドは工場メソッドである。クラス名をユーザから隠蔽するのに役に立つ。
 *突然、クラス名が変更されても、ライブラリを利用したユーザは、コードを書き換える必要がないなどのメリットがある。
 */
/*Element*/ Document.prototype.createElement = function( /*string*/ tagName) {
};
/*createDocumentFragmentメソッド
 *切り貼り用のドキュメントを作る。削除可
 */
/*DocumentFragment*/   Document.prototype.createDocumentFragment = function() {
  var s = new DocumentFragment();
  s.ownerDocument = this;
  return s;
};
/*createTextNodeメソッド
 *テキストのノードを作る
 */
/*Text*/               Document.prototype.createTextNode = function( /*string*/ data) {
  var s = new Text();
  s.data = s.nodeValue = data+"";
  s.length = data.length;
  s.ownerDocument = this;
  return s;
};
/*createCommentメソッド
 *コメントノードを作る
 */
/*Comment*/            Document.prototype.createComment = function( /*string*/ data) {
  var s = new Comment();
  s.data = s.nodeValue = data;
  s.length = data.length;
  s.ownerDocument = this;
  return s;
};
/*createCDATASectionメソッド
 *CDATA領域ノードを作る
 */
/*CDATASection*/       Document.prototype.createCDATASection = function( /*string*/ data) {
  var s = new CDATASection();
  s.data = s.nodeValue = data;
  s.length = data.length;
  s.ownerDocument = this;
  return s;
};
/*createProcessingInstructionメソッド
 *処理命令ノードを作る
 */
/*ProcessingInstruction*/ Document.prototype.createProcessingInstruction = function( /*string*/ target, /*string*/ data) {
  var s = new ProcessingInstruction();
  s.target = s.nodeName = target;
  s.data = s.nodeValue = data;
  s.ownerDocument = this;
  return s;
};
/*createAttribute
 *createAttributeNSを推奨
 */
/*Attr*/               Document.prototype.createAttribute = function( /*string*/ name) {
};
/*createEntityReferenceメソッド
 *実体参照ノードを作る
 */
/*EntityReference*/    Document.prototype.createEntityReference = function( /*string*/ name) {
  var s = new EntityReference();
  s.nodeName = name;
  s.ownerDocument = this;
  return s;
};
/*getElementsByTagNameメソッド
 *getElementsByTagNameNSを推奨
 */
/*NodeList*/           Document.prototype.getElementsByTagName = function( /*string*/ tagname) {
};
/*importNodeメソッド
 *自身のドキュメントノードに、他のドキュメントノードから作られたノードを取り込みたいときに用いる
 */
/*Node*/               Document.prototype.importNode = function( /*Node*/ importedNode, /*boolean*/ deep) {
  var s,
      imn = importedNode.nodeType,
      attr, att, fi, n, uri, ch;
  /*以下の処理は引き渡されたimportedNodeがMSXMLによって解析された
   *データであることを前提にしている
   */
  if (imn === /*Node.ELEMENT_NODE*/ 1) {
    s = this.createElementNS(importedNode.namespaceURI, importedNode.nodeName);
    attr = importedNode.attributes;
    for (var i=0;attr[i];++i) { //NamedNodeMapを検索する
      ch = attr[i];
      uri = ch.namespaceURI;
      uri = (uri === "") ? null : uri; //空文字列はnullとして扱うようにする(MSXMLが空文字列を返す時の対策)
      att = this.createAttributeNS(uri, ch.nodeName);
      att.nodeValue = ch.nodeValue;
      s.setAttributeNodeNS(att);
    }
    if (deep) {
      fi = importedNode.firstChild;
      while (fi) { //子ノードを検索して、子供がいれば、importNodeメソッドを再帰的に実行する
        n = this.importNode(fi, true);
        s.appendChild(n);
        fi = fi.nextSibling;
      }
    }
    i = null;
  } else if(imn === /*Node.TEXT_NODE*/ 3) {
    s = this.createTextNode(importedNode.data);
  } else if(imn === /*Node.ATTRIBUTE_NODE*/ 2) {
    uri = importedNode.namespaceURI;
    uri = (uri === "") ? null : uri; //空文字列はnullとして扱うようにする(MSXMLが空文字列を返す時の対策)
    s = this.createAttributeNS(uri, importedNode.nodeName);
    s.nodeValue = importedNode.nodeValue;
  } else if(imn === /*Node.COMMENT_NODE*/ 8) {
    s = this.createComment(importedNode.data);
  } else if(imn === Node.DOCUMENT_FRAGMENT_NODE) {
    s = this.createDocumentFragment();
    if (deep) {
      ch = importedNode.childNodes;
      for (var i=0,chli=ch.length;i<chli;i++) { //子ノードを検索して、子供がいれば、importNodeメソッドを再帰的に実行する
        n = this.importNode(ch[i], true);
        s.appendChild(n);
      }
    }
    i = chli = null;
  } else if(imn === Node.CDATA_SECTION_NODE) {
    s = this.createCDATASection(importedNode.data);
  } else if(imn === Node.ENTITY_REFERENCE_NODE) {
    s = this.createEntityReference(importedNode.nodeName);
    if (deep) {
      fi = importedNode.firstChild;
      while (fi) {
        n = this.importNode(fi, true);
        s.appendChild(n);
        fi = fi.nextSibling;
      }
    }    
  } else if(imn === Node.ENTITY_NODE) {
    s = new Entity();
    s.publicId = importedNode.publicId;
    s.systemId = importedNode.systemId;
    s.notationName = importedNode.notationName;
  } else if(imn === Node.PROCESSING_INSTRUCTION_NODE ) {
    s = this.createProcessingInstruction(importedNode.nodeName, importedNode.nodeValue)
  } else if(imn === Node.NOTATION_NODE) {
    s = new Notation();
    s.publicId = importedNode.publicId;
    s.systemId = importedNode.systemId;
  } else {
    throw (new DOMException(DOMException.NOT_SUPPORTED_ERR));
  }
  importedNode = deep = imn = attr = att = fi = n = uri = ch = null;
  return s;
};
/*createElementNSメソッド
 *要素ノードを作る。削除不可
 *例:var s = DOC.createElementNS("http://www.w3.org/2000/svg", "svg:svg");
 */
/*Element*/            Document.prototype.createElementNS = function( /*string*/ namespaceURI, /*string*/ qualifiedName) {
  var ele,
      prefix = null,
      localName = null;
  if (!qualifiedName) {
    throw (new DOMException(DOMException.INVALID_CHARACTER_ERR));
  }
  if (qualifiedName.indexOf(":") !== -1){
    var p = qualifiedName.split(":");
    prefix = p[0];
    localName = p[1];
  } else {
    localName = qualifiedName;
  }
  var isSpecified = false;
  if (namespaceURI) {
    var ti = this.implementation;
    if (!!ti[namespaceURI]) {
      if (!!ti[namespaceURI][localName]) { //もし、名前空間とローカル名によって、オブジェクトがあった場合
        isSpecified = true;
      }
    }
  }
  if (isSpecified) {
    ele = new (ti[namespaceURI][localName])(this._document_);
  } else {
    ele = new Element();
  }
  ele.namespaceURI = namespaceURI;
  ele.nodeName = ele.tagName = qualifiedName;
  ele.localName = localName;
  ele.prefix = prefix;
  ele.ownerDocument = this;
  ti = namespaceURI = qualifiedName = prefix = localName = isSpecified = null;
  return ele;
};
Document.prototype._document_ = document
/*createAttributeNSメソッド
 *属性ノードを作る。setAttributeNSで使うため、削除不可
 */
/*Attr*/               Document.prototype.createAttributeNS = function( /*string*/ namespaceURI, /*string*/ qualifiedName) {
  var attr = new Attr(),
      p;
  attr.namespaceURI = namespaceURI;
  attr.nodeName = attr.name = qualifiedName;
  if (qualifiedName.indexOf(":") !== -1){
   p = qualifiedName.split(":");
    attr.prefix = p[0];
    attr.localName = p[1];
  } else {
    attr.prefix = null;
    attr.localName = qualifiedName;
  }
  attr.ownerDocument = this;
  p = qualifiedName = null;
  return attr;
};
/*getElementsByTagNameNSメソッド
 *タグ名と名前空間URIを元に、要素ノード達を取得
 */
/*NodeList*/           Document.prototype.getElementsByTagNameNS = function(/*string*/ namespaceURI, /*string*/ localName) {
  var NodeList = this.documentElement.getElementsByTagNameNS(namespaceURI, localName);
  return NodeList;
};
/*getElementByIdメソッド
 *id属性の値で要素ノードを指定
 */
/*Element*/            Document.prototype.getElementById = function( /*string*/ elementId) {
  var s = !!this._id[elementId] ? this._id[elementId] : null;
  return s;
};

/*
#endif // _DOM_IDL_*/
﻿
//以下は例外処理のログをとるためのもの。開発者以外は削除すること
function STLog(jou) {
this.jo = jou;
if (this.jo) {
  this.p = document.createElement("div");
  this.p.innerHTML = "<h1>例外処理のログ</h1>";
  document.body.insertBefore(this.p,document.body.firstChild);
}
  return this;
}
STLog.prototype.add = function(e,code) {
if (this.jo) {
  this.p.innerHTML += "<p>"+code+":"+e.message+"</p>";
}
}
/*

// File: http://www.w3.org/TR/2000/REC-DOM-Level-2-Events-20001113/events.idl

#ifndef _EVENTS_IDL_
#define _EVENTS_IDL_

#include "dom.idl"
#include "views.idl"

#pragma prefix "dom.w3c.org"
module events
{

  typedef dom::DOMString DOMString;
  typedef dom::DOMTimeStamp DOMTimeStamp;
  typedef dom::Node Node;

  interface EventListener;
  interface Event;
*/
/*EventExceptionクラス
 *イベント専用の例外クラス。
 */
function EventException() {
  DOMException.call(this,arguments);
  if (this.code === 0) {
    this.message = "Uuspecified Event Type Error";
  }
  return this;
};
/*unsigned short*/  EventException.UNSPECIFIED_EVENT_TYPE_ERR = 0;

EventException.prototype = new DOMException();
EventException.constructor = DOMException;


/*  // Introduced in DOM Level 2:
  interface EventTarget {*/
/*void*/  Node.prototype.addEventListener = function( /*string*/ type, /*EventListener*/ listener, /*boolean*/ useCapture) {
  this.removeEventListener(type, listener, useCapture);  //いったん、（あれば）リスナーを離す。
  var s = new EventListener(useCapture, type, listener), //リスナーを作成
      t = type.charAt(0),
      that;
  this._capter.push(s);                 //このノードにリスナーを登録しておく
  if ((t !== "D") && (t !== "S") && (type !== "beginEvent") && (type !== "endEvent") && (type !== "repeatEvent")) { //MouseEventsならば
    that = this;
    that._tar && that._tar.attachEvent("on" +type, (function(node, type) { 
      return  function(){
        var evt = node.ownerDocument.createEvent("MouseEvents");
        evt.initMouseEvent(type, true, true, node.ownerDocument.defaultView, 0);
        node.dispatchEvent(evt);
        /*cancelBubbleプロパティについては、IEのMSDNなどを参照*/
        node.ownerDocument._window.event.cancelBubble = true;
        evt = null;
      };
    })(that, type)
    );
  }
  type = listener = useCapture = s = t = that = null;
};
/*void*/  Node.prototype.removeEventListener = function( /*string*/ type, /*EventListener*/ listener, /*boolean*/ useCapture) {
  var tce = this._capter;
  for (var i=0,tcli=tce.length;i<tcli;i++){
    if (tce[i]._listener === listener) {  //登録したリスナーと一致すれば
      tce[i] = null;
    }
  }
  i = tcli = tce = null;
};
/*boolean*/  Node.prototype.dispatchEvent = function( /*Event*/ evt) {
  if (!evt.type) { //Eventの型が設定されていないとき
    throw new EventException(EventException.UNSPECIFIED_EVENT_TYPE_ERR);
  }
  var te = this,
      td = te.ownerDocument,
      etime = evt.timeStamp,
      etype = evt.type,
      ebub = evt.bubbles,
      tob,
      toli,
      type = /*Event.CAPTURING_PHASE*/ 1,
      ecptype = /*Event.CAPTURING_PHASE*/ "1",
      ebptype = /*Event.BUBBLING_PHASE*/ "3",
      tce;
  if (!td._isLoaded) {
    /*以下では、画像の処理に時間がかかりそうな場合、処理落ちとして、遅延処理
     *を行い、バッファリングにイベント送付処理をためていく作業となる
     */
    if (evt.type === "SVGLoad") {
      td._isLoaded = 1;
    }
    if (!td._limit_time_) {
      td._limit_time_ = etime;
    } else if ((etime - td._limit_time_) > 1000) {
      /*1秒を超えたらバッファにため込んで後で使う*/
      tob = td.implementation._buffer_ || [];
      toli = tob.length
      tob[toli] = this;
      tob[toli+1] = evt;
      td.implementation._buffer_ = tob;
      te = td = etime = etype = ebub = tob = toli = type = null;
      return true;
    }
  }
  evt.target = te;
  evt.eventPhase = 1;//Event.CAPTURING_PHASE
  //このノードからドキュメントノードにいたるまでの、DOMツリーのリストを作成しておく
  td[ebptype] = null;
  /*以下の処理では、documentElementのparentNodeが
   *Documentノードではなく、nullになっていることを前提としている。
   *したがって、documentElementのparentNodeがもし、Documentノードのオブジェクトならば、以下を書き換えるべきである
   */
  while (te.parentNode) {
    te.parentNode[ecptype] = te;
    te[ebptype] = te.parentNode;
    te = te.parentNode;
  }
  td[ecptype] = te;
  te[ebptype] = td;
  /*最初に捕獲フェーズでDOMツリーを下っていき、イベントのターゲットについたら、
   *そこで、浮上フェーズとして折り返すように、反復処理をおこなう。
   */
  te = this;
  while (td) {
    evt.currentTarget = td;
    if (td === te) { //イベントのターゲットに到着（折り返し地点）
      type = 2;//Event.AT_TARGET;
    }
    evt.eventPhase = type;
    tce = td._capter; //tceは登録しておいたリスナーのリスト
    for (var j=0,tcli=tce.length;j<tcli;++j){
      if (tce[j] && (etype === tce[j]._type)) {
        tce[j].handleEvent(evt);
      }
    }
    if (evt._stop) {
      break; //stopPropagationメソッドが呼ばれたら、停止する
    }
    if (td === te) {
      if (!ebub) {
        break; //浮上フェーズに移行せず、停止する
      }
      type = 3;//Event.BUBBLING_PHASE;
    }
    td = td[type];
  }
  var ed = evt._default;
  evt = te = tce = n = td = type = tob = j = tcli = etype = etime = ebub = ecptype = ebptype =null;
  return ed;
};

function EventListener(cap,type,listener) {
  this._cap = cap;
  this._type = type;
  this._listener = listener;
  return this;
};

EventListener.prototype = {
/*void*/ handleEvent : function( /*Event*/ evt) {
    try {
      var ph = evt.eventPhase,
          cap = this._cap;
      if (ph === /*Event.CAPTURING_PHASE*/ 1) { //イベントフェーズが捕獲段階であることを示し
        cap = cap ? false : true;         //このオブジェクト（EventListenr)が捕獲フェーズを指定するならば、リスナーを作動させる。指定しなければ、作動しない。
      }
      if (!cap && (evt.type === this._type)) {
        this._listener(evt);
      }
      evt = ph = cap = null;
    } catch (e) {
      
    }
  }
};

/*Eventクラス
 *イベントの雛形となる。プロパティもすべて含めて、必須
 */
function Event() {
  return this;
};
// PhaseType
/*unsigned short*/ Event.CAPTURING_PHASE   = 1;
/*unsigned short*/ Event.AT_TARGET         = 2;
/*unsigned short*/ Event.BUBBLING_PHASE    = 3;
Event.prototype = {
  /*DOMTimeStamp*/     timeStamp : 0,
  /*DOMString*/        type : null,
  /*EventTarget*/      target : null,
  /*EventTarget*/      currentTarget : null,
  /*unsigned short*/   eventPhase : Event.CAPTURING_PHASE,
  /*boolean*/          bubbles : false,
  /*boolean*/          cancelable : false,
  _stop : false, //stopPropagationメソッドで使う
  _default : true, //preventDefaultメソッドで使う
  /*void*/ stopPropagation : function(){
    this._stop = true;
  },
  /*void*/ preventDefault : function(){
    if (this.cancelable) {
      this._default = false;
      /*IEのみで使えるreturnValueプロパティ*/
      this.target.ownerDocument._window.event.returnValue = false;
    }
  },
  /*void*/ initEvent : function( /*string*/ eventTypeArg, /*boolean*/ canBubbleArg, /*boolean*/ cancelableArg) {
    this.type = eventTypeArg;
    this.bubbles = canBubbleArg;
    this.cancelable = cancelableArg;
    eventTypeArg = canBubbleArg = cancelableArg = null;
  }
};
/*Documentノードに直接結びつける
function DocumentEvent() {
  return this;
}*/
/*Event*/ Document.prototype.createEvent = function( /*string*/ eventType) {
  var evt;
  if (eventType === "MutationEvents") {
    evt = new MutationEvent();
  } else if (eventType === "MouseEvents") {
    evt = new MouseEvent();
  } else if (eventType === "UIEvents") {
    evt = new UIEvent();
  } else if (eventType === "SVGEvents") {
    evt = new SVGEvent();
  } else if (eventType === "TimeEvents") {
    evt = new TimeEvent();
  } else {
    evt =  new Event();
  }
  evt.type = eventType;
  evt.timeStamp = +(new Date());
  eventType = null;
  return evt;
};

function UIEvent() {
  Event.call(this, arguments);
/*views::AbstractView*/  this.view;
/*long*/                 this.detail = 0;
  return this;
};

UIEvent.prototype = new Event();
UIEvent.constructor = Event;
/*void*/ UIEvent.prototype.initUIEvent = function( /*string*/ typeArg, /*boolean*/ canBubbleArg, /*boolean*/ cancelableArg, /*views::AbstractView*/ viewArg, /*long*/ detailArg) {
  this.initEvent(typeArg, canBubbleArg, cancelableArg);
  this.detail = detailArg;
  this.view = viewArg;
};
function MouseEvent(evt) {
  UIEvent.call(this, arguments);
/*long*/             this.screenX;
/*long*/             this.screenY;
/*long*/             this.clientX  = 0;
/*long*/             this.clientY  = 0;
/*boolean*/          this.ctrlKey  = false;
/*boolean*/          this.shiftKey = false;
/*boolean*/          this.altKey   = false;
/*boolean*/          this.metaKey  = false;
/*unsigned short*/   this.button;
/*EventTarget*/      this.relatedTarget;
  return this;
};
MouseEvent.prototype = new UIEvent();
MouseEvent.constructor = UIEvent;
/*void*/ MouseEvent.prototype.initMouseEvent = function( /*string*/ typeArg, /*boolean*/ canBubbleArg, /*boolean*/ cancelableArg, /*views::AbstractView*/ viewArg, /*long*/ detailArg, /*long*/ screenXArg, /*long*/ screenYArg, /*long*/ clientXArg, /*long*/ clientYArg, /*boolean*/ ctrlKeyArg, /*boolean*/ altKeyArg, /*boolean*/ shiftKeyArg, /*boolean*/ metaKeyArg, /*unsigned short*/ buttonArg, /*EventTarget*/ relatedTargetArg) {
  this.initUIEvent(typeArg, canBubbleArg, cancelableArg, viewArg, detailArg);
  this.screenX = screenXArg;
  this.screenY = screenYArg;
  this.clientX  = clientXArg;
  this.clientY  = clientYArg;
  this.ctrlKey  = ctrlKeyArg;
  this.shiftKey = shiftKeyArg;
  this.altKey   = altKeyArg;
  this.metaKey  = metaKeyArg;
  this.button = buttonArg;
  this.relatedTarget = relatedTargetArg;
};

function MutationEvent(){
  Event.call(this);
  return this;
};
MutationEvent.prototype = new Event();
MutationEvent.constructor = Event;
(function() {
/*void*/  this.initMutationEvent = function(/*string*/ typeArg, /*boolean*/ canBubbleArg,
    /*boolean*/ cancelableArg, /*Node*/ relatedNodeArg, /*string*/ prevValueArg, /*string*/ newValueArg,
    /*string*/ attrNameArg, /*unsigned short*/ attrChangeArg) {
    this.initEvent(typeArg, canBubbleArg, cancelableArg);
    this.relatedNode = relatedNodeArg;
    this.prevValue = prevValueArg;
    this.newValue = newValueArg;
    this.attrName = attrNameArg;
    this.attrChange = attrChangeArg;
    typeArg = canBubbleArg = cancelableArg = relatedNodeArg = prevValueArg = newValueArg = attrNameArg = attrChangeArg = null;
  };
  /*Node*/  this.relatedNode = null;
  /*string*/  this.prevValue = null;
  /*string*/  this.newValue = null;
  /*string*/  this.attrName = null;
  /*unsigned short*/  this.attrChange = 2;
}).apply(MutationEvent.prototype);
    // attrChangeType
/*unsigned short*/  MutationEvent.MODIFICATION  = 1;
/*unsigned short*/  MutationEvent.ADDITION      = 2;
/*unsigned short*/  MutationEvent.REMOVAL       = 3;

/*MutationEventsの発動のために、setAttributeNodeNSを上書きする。ファイル統合やmakeの際は、
 *重複するのでコアモジュールのメソッドは削除する。モジュールテストを行うために、
 *このような形式をとることにする。なお、追加部分には区別を付けるために、前後にコメントを挿入する。
 */
/*Attr*/ Element.prototype.setAttributeNodeNS = function( /*Attr*/ newAttr){
  if (newAttr.ownerDocument !== this.ownerDocument) { //所属ドキュメントが違う場合
    throw (new DOMException(DOMException.WRONG_DOCUMENT_ERR));
  }
  var s = this.attributes.setNamedItemNS(newAttr);
  newAttr.ownerElement = this;
  if (newAttr.localName === "id") {                   //id属性であったならば
    this.ownerDocument._id[newAttr.nodeValue] = this; //ドキュメントに登録しておく
  }
  /*ここから*/
  var evt = this.ownerDocument.createEvent("MutationEvents");
  if (!s) { //ノードがなければ
    /*initMutationEventメソッドは軽量化のため省略する*/
    evt.initEvent("DOMAttrModified", true, false);
    evt.relatedNode = newAttr;
    evt.newValue = newAttr.nodeValue;
    evt.attrName = newAttr.nodeName;
  } else {
    evt.initMutationEvent("DOMAttrModified", true, false, newAttr, s.nodeValue, newAttr.nodeValue, newAttr.nodeName, MutationEvent.MODIFICATION);
  }
  this.dispatchEvent(evt); //このとき、MutationEventsが発動
  evt = null;
  /*ここまで追加*/
  return s;
};

/*Node*/ Node.prototype.insertBefore = function( /*Node*/ n, ref) {
  var tp = this.parentNode,
      rp, evt,
      te = this,
      s, descend, di;
  if (tp) {
    while (!tp) {                              //先祖をたどっていく
      if (tp === n) {                          //先祖要素が追加ノードならばエラー
        throw (new DOMException(DOMException.HIERARCHY_REQUEST_ERR));
      }
      tp = tp.parentNode;
    }
  }
  if (this.ownerDocument !== n.ownerDocument) { //所属Documentの生成元が違うならば
    throw (new DOMException(DOMException.WRONG_DOCUMENT_ERR));
  }
  if (n.parentNode === this) {                  //入力した要素が子要素ならば
    this.removeChild(n);
  }
  if (!ref) {                                   //参照要素がNULLの場合、要素を追加する(appendChildと同じ効果）
    this.childNodes[this.childNodes.length] = n;
    if (this.lastChild) {
      n.previousSibling = this.lastChild;
      this.lastChild.nextSibling = n;
    }
  } else {
    if (ref.parentNode !== this) {              //参照ノードが子要素でない場合
      throw (new DOMException(DOMException.NOT_FOUND_ERR));
    }
    this.childNodes.splice(ref._num,1,n,ref);   //Arrayのspliceを利用して、リストにnノードを追加
    rp = ref.previousSibling;
    if (rp) {
      rp.nextSibling = n;
    }
    ref.previousSibling = n;
  }
  n.nextSibling = ref;
  this.firstChild = this.childNodes[0];
  this.lastChild = this.childNodes[this.childNodes.length-1];
  n.parentNode = this;
  if ((n.nodeType===/*Node.ENTITY_REFERENCE_NODE*/ 5) || (n.nodeType===/*Node.DOCUMENT_FRAGMENT_NODE*/ 11)) {
    /*実体参照や、文書フラグメントノードだけは子ノードを検索して、
     *それらを直接文書に埋め込む作業を以下で行う
     */
    var ch = n.childNodes.concat([]); //Arrayのコピー
    for (var i=0,chli=ch.length;i<chli;i++) {
      this.insertBefore(ch[i], n);
    }
    ch = null;
  }
  /*ここから*/
  evt = this.ownerDocument.createEvent("MutationEvents");
  evt.initMutationEvent("DOMNodeInserted", true, false, this, null, null, null, null);
  n.dispatchEvent(evt);
  /*以下のDOMNodeInsertedIntoDocumentイベントは、間接的、あるいは直接ノードが
   *挿入されたときに発火する。間接的な挿入とは、サブツリーを作っておいて、それをいっぺんに挿入する場合など。
   *このイベントは浮上しないことに注意を要する
   */
  do {
    s = te;
    te = te.parentNode;
  } while (te);
  if (s !== this.ownerDocument.documentElement) {
    evt = s = null;
    return n;
  }
  evt = this.ownerDocument.createEvent("MutationEvents");
  evt.initMutationEvent("DOMNodeInsertedIntoDocument", false, false, null, null, null, null, null);
  n.dispatchEvent(evt);
  if (!n.hasChildNodes()) {                       //子ノードがないので終了
    return n;
  }
  descend = n.getElementsByTagNameNS("*", "*"); //全子孫要素を取得
  if (descend) {
    for (var i=0,dli=descend.length;i<dli;++i) {
      di = descend[i];
      di.dispatchEvent(evt);
      di = null;
    }
  }
  evt = descend = null;
  /*ここまで追加*/
  tp = rp = te = s = di = null;
  return n;
};

/*Node*/ Node.prototype.removeChild = function( /*Node*/ ele) {
  if (!(ele instanceof Node)) {                   //Nodeでなければ
    throw (new Error());
  }
  /*ここから*/
  var evt = this.ownerDocument.createEvent("MutationEvents");
  /*以下のDOMNodeRemovedFromDocumentイベントは、間接的、あるいは直接ノードが
   *除去されたときに発火する。間接的な除去とは、サブツリーをいっぺんに除去する場合など。
   *このイベントは浮上しないことに注意を要する
   */
  evt.initMutationEvent("DOMNodeRemovedFromDocument", false, false, null, null, null, null, null);
  ele.dispatchEvent(evt);
  var descend = ele.getElementsByTagNameNS("*", "*"); //全子孫要素を取得
  if (descend) {
    evt.initMutationEvent("DOMNodeRemovedFromDocument", false, false, null, null, null, null, null);
    for (var i=0,dli=descend.length;i<dli;++i) {
      var di = descend[i];
      evt.target = di;
      di.dispatchEvent(evt);
      di = null;
    }
  }
  evt.initMutationEvent("DOMNodeRemoved", true, false, this, null, null, null, null);
  ele.dispatchEvent(evt);
  evt = descend = null;
  /*ここまで追加*/
  if (ele.parentNode === this) {
    this.childNodes.splice(ele._num,1);           //Arrayのspliceを利用して、リストからeleノードを排除
  } else {                                        //親が違う場合
    throw (new DOMException(DOMException.NOT_FOUND_ERR));
  }
  if (ele.ownerDocument !== this.ownerDocument) { //所属ドキュメントが違う場合
    throw (new Error());
  }
  return ele;
};

/*void*/ CharacterData.prototype.appendData = function( /*string*/ arg) {
  var pd = this.data,
      evt;
  this.data += arg;
  this.length = this.data.length;
  /*ここから*/
  evt = this.ownerDocument.createEvent("MutationEvents");
  evt.initMutationEvent("DOMCharacterDataModified", true, false, null, pd, this.data, null, null);
  this.parentNode.dispatchEvent(evt);
  evt = arg = pd = null;
  /*ここまで追加*/
};
/*void*/ CharacterData.prototype.insertData = function( /*long*/ offset, /*string*/ arg) {
  var pd = this.data,
      pre = this.substring(0, offset - 1),                 //文字列を二つに分けた、前半部分
      next = this.substring(offset, this.length - offset), //後半部分
      evt;
  this.data = pre + this.data + next;
  this.length = this.data.length;
  /*ここから*/
  evt = this.ownerDocument.createEvent("MutationEvents");
  evt.initMutationEvent("DOMCharacterDataModified", true, false, null, pd, this.data, null, null);
  this.parentNode.dispatchEvent(evt);
  evt = arg = pd = pre = next = null;
  /*ここまで追加*/
};
/*void*/ CharacterData.prototype.deleteData = function( /*long*/ offset, /*long*/ count) {
  var pd = this.data;
      pre = this.substring(0, offset - 1),                    //残すべき前半部分
      next = this.substring(offset + count, this.length - 1), //後半部分
      evt;
  if (offset + count > this.length) {                         //offsetとcountの和が文字全体の長さを超える場合、offsetから最後までのを削除
    next = "";
  }
  this.data = pre + next;
  this.length = this.data.length;
  /*ここから*/
  evt = this.ownerDocument.createEvent("MutationEvents");
  evt.initMutationEvent("DOMCharacterDataModified", true, false, null, pd, this.data, null, null);
  this.parentNode.dispatchEvent(evt);
  evt = pd = null;
  /*ここまで追加*/
};

// _EVENTS_IDL_
﻿
/*
// File: http://www.w3.org/TR/2000/REC-DOM-Level-2-Style-20001113/stylesheets.idl

#ifndef _STYLESHEETS_IDL_
#define _STYLESHEETS_IDL_

#include "dom.idl"

#pragma prefix "dom.w3c.org"
module stylesheets
{

  typedef dom::DOMString DOMString;
  typedef dom::Node Node;
*/

/*StyleSheet
 *スタイルシート文書を示す。削除不可。
 */
function StyleSheet() {
 this.type = "text/css";
 this.disabled = false;
 /*Node*/ this.ownerNode = null;
 /*StyleSheet*/ this.parentStyleSheet = null;
 this.href = null;
 this.title = "";
 /*MediaList*/ this.media = new MediaList();
 return this;
};

/*StyleSheetList
 *このインターフェースはArrayで代用する
function StyleSheetList() {
    readonly attribute unsigned long    length;
    StyleSheet         item(in unsigned long index);
  };
*/

function MediaList() {
 this.mediaText = "";
 this.length = 0;
 return this;
};
MediaList.prototype = {
/*string*/ item : function(/*long*/ index) {
    return (this[index]);
  },
/*void*/   deleteMedium : function(/*string*/ oldMedium) {
    for (var i=0,tli=this.length;i<tli;++i) {
      if (this[i] === oldMedium) {
        delete this[i];
        --this.length;
        return;
      }
    }
    throw (new DOMException(DOMException.NOT_FOUND_ERR));
  },
/*void*/   appendMedium : function(/*string*/ newMedium) {
    this[this.length] = newMedium;
    ++this.length;
  }
};

function LinkStyle() {
 /*StyleSheet*/ this.sheet = new StyleSheet();
 return this;
};

function DocumentStyle() {
 /*StyleSheetList*/ this.styleSheets = [];
 return this;
};
/*
#endif // _STYLESHEETS_IDL_
*/﻿
/*
// File: http://www.w3.org/TR/2000/REC-DOM-Level-2-Style-20001113/css.idl

#ifndef _CSS_IDL_
#define _CSS_IDL_

#include "dom.idl"
#include "stylesheets.idl"
#include "views.idl"

#pragma prefix "dom.w3c.org"
module css
{

  typedef dom::DOMString DOMString;
  typedef dom::Element Element;
  typedef dom::DOMImplementation DOMImplementation;

  interface CSSRule;
  interface CSSStyleSheet;
  interface CSSStyleDeclaration;
  interface CSSValue;
  interface Counter;
  interface Rect;
  interface RGBColor;
*/
/*CSSRuleList
 *Arrayで代用
function CSSRuleList {
    readonly attribute unsigned long    length;
    CSSRule            item(in unsigned long index);
  };
*/
/*CSSRule
 *CSSのルールを表現する。基底クラスなので削除不可。
 */
function CSSRule() {
  this.cssText = "";
/*CSSStyleSheet*/ this.parentStyleSheet;
/*CSSRule*/       this.parentRule = null;
  return this;
};
// RuleType
CSSRule.UNKNOWN_RULE                   = 0;
CSSRule.STYLE_RULE                     = 1;
CSSRule.CHARSET_RULE                   = 2;
CSSRule.IMPORT_RULE                    = 3;
CSSRule.MEDIA_RULE                     = 4;
CSSRule.FONT_FACE_RULE                 = 5;
CSSRule.PAGE_RULE                      = 6;

function CSSStyleRule() {
  CSSRule.call(this, arguments);
  this.type = CSSRule.STYLE_RULE;
  this.selectorText = "";
/*CSSStyleDeclaration*/ this.style = new CSSStyleDeclaration();
  this.style.parentRule = null;
  return this;
};
CSSStyleRule.prototype = new CSSRule();
CSSStyleRule.constructor = CSSRule;

function CSSMediaRule() {
  CSSRule.call(this, arguments);
  this.type = CSSRule.MEDIA_RULE;
/*stylesheets::MediaList*/ this.media = new MediaList();
/*CSSRuleList*/ this.cssRules = [];
  return this;
};
CSSMediaRule.prototype = new CSSRule();
CSSMediaRule.constructor = CSSRule;
/*long*/ CSSMediaRule.prototype.insertRule = function( /*string*/ rule, /*long*/ index) {
  this.cssRules.splice(index,rule,1);
  this.media.appendMedium(rule);
  return this;
};
/*void*/ CSSMediaRule.prototype.deleteRule = function( /*long*/ index) {
};

function CSSFontFaceRule() {
  CSSRule.call(this, arguments);
  this.type = CSSRule.FONT_FACE_RULE;
/*CSSStyleDeclaration*/ this.style;
  return this;
};
CSSFontFaceRule.prototype = new CSSRule();
CSSFontFaceRule.constructor = CSSRule;

function CSSPageRule() {
  CSSRule.call(this, arguments);
  this.type = CSSRule.PAGE_RULE;
  this.selectorText = "";
/*CSSStyleDeclaration*/ this.style;
  return this;
};
CSSPageRule.prototype = new CSSRule();
CSSPageRule.constructor = CSSRule;

function CSSImportRule() {
  CSSRule.call(this, arguments);
  this.type = CSSRule.IMPORT_RULE;
  this.href = "";
/*stylesheets::MediaList*/ this.media = new MediaList();
/*CSSStyleSheet*/ this.styleSheet = null;
  return this;
};
CSSImportRule.prototype = new CSSRule();
CSSImportRule.constructor = CSSRule;

function CSSCharsetRule() {
  CSSRule.call(this, arguments);
  this.type = CSSRule.CHARSET_RULE;
  this.encoding = "";
  return this;
};
CSSCharsetRule.prototype = new CSSRule();
CSSCharsetRule.constructor = CSSRule;

function CSSUnknownRule() {
  CSSRule.call(this, arguments);
  this.type = CSSRule.UNKNOWN_RULE;
  return this;
};
CSSUnknownRule.prototype = new CSSRule();
CSSUnknownRule.constructor = CSSRule;

/*CSSStyleDeclaration
 *CSSの宣言ブロックを表現。削除不可。
 */
function CSSStyleDeclaration() {
  this._list = []; //内部のリスト
  this._def = this._list._fontSize = this._list._opacity = null;
  return this;
};
CSSStyleDeclaration.prototype = {
  cssText : "",
  /*long*/ length : 0,
  /*CSSRule*/ parentRule : null,
  _urlreg : /url\(#([^)]+)/,
  /*getPropertyValueメソッド
   *CSSの値を返す。この値は継承ではなくて、明示的に表記されているもの
   */
/*string*/   getPropertyValue : function( /*string*/ propertyName) {
    var tg = this.getPropertyCSSValue(propertyName);
    if (tg) {                             //見つかった場合
      var tc = tg.cssText;
      return (tc.substring(tc.indexOf(":")+1, tc.length));
    } else {
      return "";
    }
  },
  /*getPropertyCSSValueメソッド
   *CSSValueオブジェクトを返す。このメソッドは判別に用いているので、削除不可。
   */
/*CSSValue*/ getPropertyCSSValue : function( /*string*/ propertyName) {
    var prop = propertyName,
        ti, tc;
    propertyName += ":";
    if (propertyName === ":") { //どんなデータ型でも、文字列に変換する機能をJavaScriptが持つことに注意
      return null;
    }
    for (var i=0,tl=this._list,tli=tl.length;i<tli;++i) {
      ti = tl[i];
      tc = ti.cssText;
      if (tc.indexOf(propertyName) > -1) {  //プロパティ名に合致するCSSValueオブジェクトが見つかった場合 
        ti._empercents = tl._fontSize;
        i = tl = tli = tc = prop = propertyName = null;
        return ti;
      }
    }
    if (this._def) {
      i = tl = tli = tc = propertyName = null;
      return (this._def[prop]);
    }
    i = tl = tli = prop = propertyName = null;
    return null;
  },
  /*removePropertyメソッド
   *プロパティを宣言内から除去
   */
/*string*/   removeProperty : function( /*string*/ propertyName) {
    var tg = this.getPropertyCSSValue(propertyName);
    if (tg) {                        //見つかった場合
      this._list.splice(tg._num,1);  //Arrayのspliceを利用して、リストからCSSValueオブジェクトを排除
      --this.length;
    }
  },
  /*getPropertyPriorityメソッド
   *importantなどのpriorityを取得する
   */
/*string*/   getPropertyPriority : function( /*string*/ propertyName) {
    var tg = this.getPropertyCSSValue(propertyName);
    if (tg) {                        //見つかった場合
      return (tg._priority);
    } else {
      return "";
    }
  },
  _isFillStroke : {
    "fill" : 1,
    "stroke" : 1
  },
  _isColor : {
    "color" : 1
  },
  _isStop : {
    "stop-color" : 1
  },
  _isRS : {
    "r" : 1,
    "#" : 1
  },
  /*setPropertyメソッド
   *プロパティを宣言内で、明示的に設定。継承は無視する
   */
/*void*/     setProperty : function( /*string*/ propertyName, /*string*/ value, /*string*/ priority) {
    var cssText = propertyName,
        tg = null,
        ti, paintType, v1,
        uri = null,
        color = null,
        fill, stroke, stop;
    if (!!this[propertyName]) {
      tg = this.getPropertyCSSValue(propertyName);
    }
    cssText += ":";
    cssText += value;
    if (this._isFillStroke[propertyName]) {
      /*fill、strokeプロパティは別途、SVGPaintで処理（JavaScriptでは、型キャストを使えないため）
       *CSSPrimitiveValueオブジェクトとSVGPaintオブジェクトを最後に置き換える
       */
      if (tg) {  //見つかった場合
        ti = tg;
      } else {
        ti = new SVGPaint();
      }
      paintType = /*SVGPaint.SVG_PAINTTYPE_UNKNOWN*/ 0;
      v1 = value.charAt(0);
      if (this._isRS[v1] || ti._keywords[value]) {
        paintType = /*SVGPaint.SVG_PAINTTYPE_RGBCOLOR*/ 1;
        color = value;
      } else if (value === "none") {
        paintType = /*SVGPaint.SVG_PAINTTYPE_NONE*/ 101;
      } else if (this._urlreg.test(value)) {                   //fill属性の値がurl(#id)ならば
        paintType = /*SVGPaint.SVG_PAINTTYPE_URI*/ 107;
        uri = RegExp.$1;
      } else if (value === "currentColor") {
        paintType = /*SVGPaint.SVG_PAINTTYPE_CURRENTCOLOR*/ 102;
        color = this.getPropertyValue("color") || "rgb(0,0,0)";
      }
      ti.setPaint(paintType, uri, color, null);
      paintType = v1 = uri = color = null;
    } else if (this._isStop[propertyName]) {
      if (tg) {  //見つかった場合
        ti = tg;
      } else {
        ti = new SVGColor();
      }
      if (value === "currentColor") {
        ti.colorType = /*SVGColor.SVG_COLORTYPE_CURRENTCOLOR*/ 3;
        value = this.getPropertyValue("color") || "rgb(0,0,0)";
      } else {
        ti.colorType = /*SVGColor.SVG_COLORTYPE_RGBCOLOR*/ 1;
      }
      ti.setRGBColor(value);
    } else if (this._isColor[propertyName]) {
      if (tg) {  //見つかった場合
        ti = tg;
      } else {
        ti = new CSSPrimitiveValue();
      }
      fill = this.getPropertyCSSValue("fill");
      stroke = this.getPropertyCSSValue("stroke");
      stop = this.getPropertyCSSValue("stop-color");
      if (fill && (fill.paintType === /*SVGPaint.SVG_PAINTTYPE_CURRENTCOLOR*/ 102)) {
        fill.setPaint(fill.paintType, null, value, null);
      } else if (stroke && (stroke.paintType === /*SVGPaint.SVG_PAINTTYPE_CURRENTCOLOR*/ 102)) {
        stroke.setPaint(fill.paintType, null, value, null);
      } else if (stop && (stop.colorType === /*SVGColor.SVG_COLORTYPE_CURRENTCOLOR*/ 3)) {
        stop.setRGBColor(value);
      }
    } else {
      if (tg) {  //見つかった場合
        ti = tg;
      } else {
        ti = new CSSPrimitiveValue();
      }
    }
    ti._priority = priority;
    ti.cssText = cssText;
    if (!tg) {
      //_numプロパティはremovePropertyメソッドで利用する
      ti._num = this._list.length;
      this._list[ti._num] = ti;
      this[propertyName] = 1;
      ++this.length;
    }
    if (value === "inherit") {
      ti.cssValueType = CSSValue.CSS_INHERIT;
    } else if (propertyName === "opacity") {
      this._list._opacity = +value;
    } else if (propertyName === "font-size") {
      if (/(%|em)/.test(value)) {
        this._list.fontSize = parseFloat(value);
      }
    }
    cssText = null;
  },
  /*itemメソッド
   *リストの位置にあるプロパティ名を取得する。宣言内のすべてのプロパティ名を取得するのに便利
   */
/*string*/   item : function( /*long*/ index) {
    if (index >= this.length) { //indexの位置にCSSValueが指定されていないとき
      var s = "";
    } else {
      var s = this._list[index].cssText.substring(0, this._list[index].cssText.indexOf(":"));
    }
    return s;
  },
  /*_setCSSTextメソッド　SIE独自のメソッド。
   *リストをテキストに変換して、cssTextプロパティに格納しておく。cssTextがsetterである場合は、削除しておくこと。
   */
  _setCSSText : function () {
    var tlist = this._list,
        list = {}, //SIEの設計上、プロパティが重複してしまう恐れがあるので、重複防止のためのチェックするオブジェクト
        ti;
    this.length = tlist.length; //setPropertyメソッドを解さないで処理する場合があるため、lengthプロパティを同値にする
    for (var i=tlist.length-1;i>=0;--i) {
      ti = this.item(i);
      if (!list[ti]) {
        this.cssText += tlist[i].cssText+ ";";
        list[ti] = 1;
      }
    }
    tlist = list = ti = i = null;
  }
};

function CSSValue() {
  return this;
};
    // UnitTypes
CSSValue.CSS_INHERIT                    = 0;
CSSValue.CSS_PRIMITIVE_VALUE            = 1;
CSSValue.CSS_VALUE_LIST                 = 2;
CSSValue.CSS_CUSTOM                     = 3;
CSSValue.prototype = {
  cssText : "",
  cssValueType : CSSValue.CSS_CUSTOM,
  _isDefault : 0 //デフォルトであるかどうか（独自のプロパティ)
};

function CSSPrimitiveValue() {
  return this;
};

(function(t) {
t.CSS_UNKNOWN                    = 0;
t.CSS_NUMBER                     = 1;
t.CSS_PERCENTAGE                 = 2;
t.CSS_EMS                        = 3;
t.CSS_EXS                        = 4;
t.CSS_PX                         = 5;
t.CSS_CM                         = 6;
t.CSS_MM                         = 7;
t.CSS_IN                         = 8;
t.CSS_PT                         = 9;
t.CSS_PC                         = 10;
t.CSS_DEG                        = 11;
t.CSS_RAD                        = 12;
t.CSS_GRAD                       = 13;
t.CSS_MS                         = 14;
t.CSS_S                          = 15;
t.CSS_HZ                         = 16;
t.CSS_KHZ                        = 17;
t.CSS_DIMENSION                  = 18;
t.CSS_STRING                     = 19;
t.CSS_URI                        = 20;
t.CSS_IDENT                      = 21;
t.CSS_ATTR                       = 22;
t.CSS_COUNTER                    = 23;
t.CSS_RECT                       = 24;
t.CSS_RGBCOLOR                   = 25;
t.prototype = new CSSValue();
t.constructor = CSSValue;
})(CSSPrimitiveValue);

(function(){
  this._n = [1, 0.01, 1, 1, 1, 35.43307, 3.543307, 90, 1.25, 15, 1, 180 / Math.PI, 90/100, 1, 1000, 1, 1000, 1]; //CSS_PX単位への変換値（なお、CSS_SはCSS_MSに、CSS_RADとCSS_GRADはCSS_DEGに、CSS_KHZはCSS_HZに統一）
  this.cssValueType = CSSValue.CSS_PRIMITIVE_VALUE;
  this.primitiveType = CSSPrimitiveValue.CSS_UNKNOWN;
  this._value = null;
  this._percent = 0; //単位に%が使われていた場合、このプロパティの数値を1%として使う
  this._empercent = 0;
  /*void*/ this.setFloatValue = function(/*short*/ unitType, /*float*/ floatValue) {
    if ((/*CSSPrimitiveValue.CSS_UNKNOWN*/ 0 >= unitType) && (unitType >= /*CSSPrimitiveValue.CSS_STRING*/ 19)) { //浮動小数点数単位型をサポートしないCSS単位である場合
      throw new DOMException(DOMException.INVALID_ACCESS_ERR);
    }
    this.primitiveType = unitType;
    this._value = floatValue * this._n[unitType-1];  //値はあらかじめ、利用しやすいように変換しておく
  };
  /*getFloatValueメソッド
   *別の単位に変換可能。
   */
  this._regd = /[\d\.]+/;
  /*float*/ this.getFloatValue = function(/*short*/ unitType) {
    if ((/*CSSPrimitiveValue.CSS_UNKNOWN*/ 0 >= unitType) && (unitType >= /*CSSPrimitiveValue.CSS_STRING*/ 19)) { //浮動小数点数単位型をサポートしないCSS単位である場合
      throw new DOMException(DOMException.INVALID_ACCESS_ERR);
    }
    if (this._value || (this._value === 0)) { //すでに、setFloatValueメソッドによって_valueプロパティが設定されていた場合
      return (this._value / this._n[unitType-1]);
    } else {
      var tc = this.cssText,
          n = tc.charAt(tc.length-1),
          type = 0,
          s = +(tc.match(this._regd));
      s = isNaN(s) ? 0 : s;
      if (n >= "0" && n <= "9") {
        type = /*CSSPrimitiveValue.CSS_NUMBER*/ 1;
        if (unitType === 1) {
          unitType = tc = n = type = null;
          return s;
        }
      } else if (n === "%") {
        s *= this._percent;
        type = /*CSSPrimitiveValue.CSS_PERCENTAGE*/ 2;
      } else if ((n === "m") && (tc.charAt(tc.length-2) === "e")) {
        s *= this._empercent;
        type = /*CSSPrimitiveValue.CSS_EMS*/ 3;
      } else if ((n === "x") && (tc.charAt(tc.length-2) === "e")) {
        type = /*CSSPrimitiveValue.CSS_EXS*/ 4;
      } else if ((n === "x") && (tc.charAt(tc.length-2) === "p")) {
        type = /*CSSPrimitiveValue.CSS_PX*/ 5;
      } else if ((n === "m") && (tc.charAt(tc.length-2) === "c")) {
        type = /*CSSPrimitiveValue.CSS_CM*/ 6;
      } else if ((n === "m") && (tc.charAt(tc.length-2) === "m")) {
        type = /*CSSPrimitiveValue.CSS_MM*/ 7;
      } else if (n === "n") {
        type = /*CSSPrimitiveValue.CSS_IN*/ 8;
      } else if (n === "t") {
        type = /*CSSPrimitiveValue.CSS_PT*/ 9;
      } else if (n === "c") {
        type = /*CSSPrimitiveValue.CSS_PC*/ 10;
      }
      s = s * this._n[type-1] / this._n[unitType-1];
      tc = n = type = unitType = null;
      return s;
    }
  };
  /*void*/ this.setStringValue = function(/*short*/ stringType, /*string*/ stringValue) {
    if (CSSPrimitiveValue.CSS_DIMENSION >= stringType && stringType >= CSSPrimitiveValue.CSS_COUNTER) { //文字列型をサポートしないCSS単位である場合
      throw new DOMException(DOMException.INVALID_ACCESS_ERR);
    }
    this._value = stringValue;
  };
  /*string*/ this.getStringValue = function(/*short*/ stringType) {
    if (CSSPrimitiveValue.CSS_DIMENSION >= stringType && stringType >= CSSPrimitiveValue.CSS_COUNTER) { //文字列型をサポートしないCSS単位である場合
      throw new DOMException(DOMException.INVALID_ACCESS_ERR);
    }
    return (this._value);
  };
  /*Counter*/ this.getCounterValue = function() {
    if (this.primitiveType !== CSSPrimitiveValue.CSS_COUNTER) { //Counter型ではないとき
      throw new DOMException(DOMException.INVALID_ACCESS_ERR);
    }
    return (new Counter());
  };
  /*Rect*/ this.getRectValue = function() {
    if (this.primitiveType !== CSSPrimitiveValue.CSS_RECT) { //Rect型ではないとき
      throw new DOMException(DOMException.INVALID_ACCESS_ERR);
    }
    return (new Rect());
  };
  /*RGBColor*/ this.getRGBColorValue = function() {
    if (this.primitiveType !== CSSPrimitiveValue.CSS_RGBCOLOR) { //RGBColor型ではないとき
      throw new DOMException(DOMException.INVALID_ACCESS_ERR);
    }
    var s = new RGBColor();
    var rgbColor = this.cssText;
    var tkr = SVGColor.prototype._keywords[rgbColor];
    if (tkr !== void 0) {
      rgbColor = tkr;
    }
    if (rgbColor.indexOf("%", 5) > 0) {      // %を含むrgb形式の場合
      rgbColor = rgbColor.replace(/[\d.]+%/g, function(t) {
        return Math.round((2.55 * parseFloat(t)));
      });
    } else if (rgbColor.indexOf("#") > -1) {  //#を含む場合
      rgbColor = rgbColor.replace(/[\da-f][\da-f]/gi, function(s) {
        return parseInt(s, 16);
      });
    }
    var n = rgbColor.match(/\d+/g);
    s.red.setFloatValue(CSSPrimitiveValue.CSS_NUMBER, parseFloat(n[0]));
    s.green.setFloatValue(CSSPrimitiveValue.CSS_NUMBER, parseFloat(n[1]));
    s.blue.setFloatValue(CSSPrimitiveValue.CSS_NUMBER, parseFloat(n[2]));
    n = rgbColor = null;
    return (s);
  };
}).apply(CSSPrimitiveValue.prototype);
/*CSSValueList
 *Arrayで代用する
 */
function CSSValueList() {
  this.cssValueType = CSSValue.CSS_VALUE_LIST;
  this.length = 0;
  return this;
};
CSSValueList.prototype = new CSSValue();
CSSValueList.constructor = CSSValue;
/*CSSValue*/ CSSValueList.prototype.item = function( /*long*/ index) {
  return (this[index]);
};

function RGBColor() {
  this.red = new CSSPrimitiveValue();
  this.green = new CSSPrimitiveValue();
  this.blue = new CSSPrimitiveValue();
  this.red.primitiveType = this.green.primitiveType = this.blue.primitiveType = /*CSSPrimitiveValue.CSS_NUMBER*/ 1;
  return this;
};

function Rect() {
  this.top = new CSSPrimitiveValue();
  this.right = new CSSPrimitiveValue();
  this.bottom = new CSSPrimitiveValue();
  this.left = new CSSPrimitiveValue();
  return this;
};

function Counter() {
  this.identifier = "";
  this.listStyle = "";
  this.separator = "";
  return this;
};

function ElementCSSInlineStyle() {
  this.style = new CSSStyleDeclaration();
  this._attributeStyle = new CSSStyleDeclaration(); //プレゼンテーション属性の値を格納する
  return this;
};

/*CSS2Properties
 *削除不可
 *さらにSVG CSSを付け加えている
 */
var CSS2Properties = {
  fill : "black",
  stroke : "none",
  cursor : "auto",
  visibility : "visible",
  display : "inline-block",
  opacity : "1",
  fillOpacity : "1",
  strokeWidth : "1",
  strokeDasharray : "none",
  strokeDashoffset : "0",
  strokeLinecap : "butt",
  strokeLinejoin : "miter",
  strokeMiterlimit : "4",
  strokeOpacity : "1",
  writingMode : "lr-tb",
  fontFamily : "serif",
  fontSize : "12",
  color : "black",
  fontSizeAdjust : "none",
  fontStretch : "normal",
  fontStyle : "normal",
  fontVariant : "normal",
  fontWeight : "normal",
  font : "inline",

//# Gradient properties:

  stopColor : "black",
  stopOpacity : "1",
  textAnchor : "start",
  azimuth : "center",
                                        // raises(dom::DOMException) on setting
  //簡略プロパティに関しては、初期値を再考せよ
  clip : "auto",
  direction : "ltr",
  letterSpacing : "normal",
  lineHeight : "normal",
  overflow : "visible",
  textAlign : "left",
  textDecoration : "none",
  textIndent : "0",
  textShadow : "none",
  textTransform : "none",
  unicodeBidi : "normal",
  verticalAlign : "baseline",
  whiteSpace : "normal",
  wordSpacing : "normal",
  zIndex : "auto",
//  #

  mask : "none",

//# Filter Effects properties:

  enableBackground : "accumulate",
  filter : "none",
  floodColor : "black",
  floodOpacity : "1",
  lightingColor : "white",

//# Interactivity properties:

  pointerEvents : "visiblePainted",

//# Color and Painting properties:

  colorInterpolation : "sRGB",
  colorInterpolationFilters : "linearRGB",
  colorProfile : "auto",
  colorRendering : "auto",
  imageRendering : "auto",
  marker : "",
  markerEnd : "none",
  markerMid : "none",
  markerStart : "none",
  shapeRendering : "auto",
  textRendering : "auto",

//# Text properties:

  alignmentBaseline : "",
  baselineShift : "baseline",
  dominantBaseline : "auto",
  glyphOrientationHorizontal : "0deg",
  glyphOrientationVertical : "auto",
  kerning : "auto",
  fillRule : "nonzero"
};
CSS2Properties.visibility._n = 1; //初期値の設定（_setPaintで使う）

function CSSStyleSheet() {
/*CSSRule*/      this.ownerRule = null;
/*CSSRuleList*/  this.cssRules = [];
  return this;
};
CSSStyleSheet.prototype = new StyleSheet();
CSSStyleSheet.constructor = StyleSheet;
/*long*/  CSSStyleSheet.prototype.insertRule = function( /*string*/ rule, /*long*/ index) {
  var s = new CSSStyleRule(), style = s.style, a, sc = rule.match(/\{[\s\S]+\}/), m;
  s.parentStyleSheet = this;
  style.cssText = rule;
  //style値の解析;
  sc = sc.replace(/^[^a-z\-]+/, "")
         .replace(/\:\s+/g, ":")
         .replace(/\s*;[^a-z\-]*/g, ";");
  a = sc.split(";");
  for (var i=0, ali=a.length;i<ali;++i) {
      ai = a[i],
      m = ai.split(":");
      if (ai !== "") {
        style.setProperty(m[0], m[1]);
      }
      ai = m = null;
    }
  a = sc = style = null;
  this.cssRules.splice(index,s,1);
};
/*void*/  CSSStyleSheet.prototype.deleteRule = function(/*long*/ index) {
  this.cssRules.splice(index, 1);
};


/*getComputedStyle関数
 *最近の計算値を取得する。Document.defaultViewはSafariがグローバル(window)にサポートしていないため付ける。
 */
/*interface ViewCSS : views::AbstractView {*/
Document.prototype.defaultView = new ViewCSS();
function ViewCSS(){
  return this;
};
/*CSSStyleDeclaration*/ ViewCSS.prototype.getComputedStyle = function( /*Element*/ elt, /*string*/ pseudoElt) {
  if (!!elt._currentStyle) {
    /*キャッシュがあれば、それを返す*/
    return (elt._currentStyle);
  }
  var s = new CSSStyleDeclaration();
  elt._currentStyle = s;
  //リストを連結することによって、カスケーディングを実現する
  var pelt = elt.parentNode;
  if (pelt) {
    var p = this.getComputedStyle(pelt, pseudoElt)._list;
  } else {
    var p = {length:0, _opacity:1, _fontSize:12};
  }
  var q = s._list;
  if (!!elt.style) {
    var estl = elt.style._list, easl = elt._attributeStyle._list, csi = CSSValue.CSS_INHERIT;
    for (var i=0,eli=estl.length;i<eli;++i) {
      q[q.length] = estl[i];
    }
    for (var i=0,eli=easl.length;i<eli;++i) {
      q[q.length] = easl[i];   //プレゼンテーション属性を結びつける
    }
    estl = easl = null;
    //スタイルシートのルールを結びつける
    if (elt._rules) {
      for (var i=0,eli=elt._rules.length;i<eli;++i) {
        var ei = elt._rules[i].style._list;
        for (var j=0,esli=ei.length;j<esli;++j) {
          q[q.length] = ei[j];
        }
      }
    }
    //inheritの値があれば、削除しておく
    for (var i=0,qli=q.length;i<qli;++i) {
      if (q[i].cssValueType === csi) {
        q.splice(i, 1);
        --qli;
      }
    }
  }
  for (var i=0,pli=p.length;i<pli;++i) {
    q[q.length] = p[i];
  }
  if (elt._runtimeStyle) {
    q = elt._runtimeStyle._list.concat(q);
  }
  s._def = this._defaultCSS;    //デフォルト値の設定
  s._list =  q;
  if (!!elt.style) {
    var eso = elt.style._list._opacity || elt._attributeStyle._list._opacity;
  } else {
    var eso = 1;
  }
  s._list._opacity = p._opacity * (eso || 1);
  s._list._fontSize = p._fontSize;
  pelt = eso = p = q = null;
  s._document = elt.ownerDocument;
  return s;
};

/*getOverrideStyleメソッド
 *指定した要素の上書きスタイルシートを取得。
 */
/*function DocumentCSS : stylesheets::DocumentStyle {*/
/*CSSStyleDeclaration*/ Document.prototype.getOverrideStyle = function( /*Element*/ elt, /*string*/ pseudoElt) {
  var tar = elt;
  if (!!tar._runtimeStyle) {
    return (tar._runtimeStyle);
  } else {
    var s = new CSSStyleDeclaration(), setProp = s.setProperty;
    tar._runtimeStyle = s;
  }
  s.setProperty = function(propertyName, value, priority) {
    setProp.call(s, propertyName, value, priority);
    var tar = elt, el = tar._tar, isFill = isStroke = false;
    delete tar._currentStyle;
    if ((tar.localName === "g") || (tar.localName === "a")) {
      var sl = tar.getElementsByTagNameNS("http://www.w3.org/2000/svg", "*");
      if (sl) {
        for (var i=0,sli=sl.length;i<sli;++i) {
          var di = sl[i];
          delete di._currentStyle;
          NAIBU._setPaint(di, di.getScreenCTM());
          di = null;
        }
        sl = null;
      }
      el = null;
    }
    if (!el) {
      return;
    }
    NAIBU._setPaint(tar, tar.getScreenCTM());
    el = tar = value = null;
  }
  return s;
};
/*createCSSStyleSheetメソッド
 *文書のスタイルシートを作成
 */
/*interface DOMImplementationCSS : DOMImplementation {*/
/*CSSStyleSheet*/ DOMImplementation.createCSSStyleSheet = function( /*string*/ title, /*string*/ media) {
  var s = new CSSStyleSheet();
  s.title = title;
  var nm = new MediaList();
  nm.mediaText = media;
  if (media && (media !== "")) {
    var mes = media.split(",");  //文字列をコンマで区切って配列に
    for (var i=0,mli=mes.length;i<mli;++i) {
      nm.appendMedium(mes[i]);   //メディアリストに値を加えていく
    }
  }
  s.media = nm;
  return s;
};
/*
#endif // _CSS_IDL_
*/﻿
// File: smil.idl
/*
#ifndef _SMIL_IDL_
#define _SMIL_IDL_

#include "dom.idl"

#pragma prefix "dom.w3c.org"
module smil
{
  typedef dom::DOMString DOMString;
*/
/*ElementTimeControlはSVGAnimationElementに統合させる。
 *というのは、多重継承が難しいため
 */
function ElementTimeControl(ele) {
  this._tar = ele;
  /*_beginと_endプロパティはミリ秒数を収納する。リピート時に書き換えられることがある。
   *_beginはアニメ開始時の秒数。_endはアニメ終了時の秒数。
   *なお、文書読み込み終了時（アニメ開始時刻）の秒数を0とする。
   */
  this._begin = 0;
  this._end = null;
  return this;
};
ElementTimeControl.prototype = {
  /*void*/  beginElement : function() {
    var ttd = this.ownerDocument, evt = ttd.createEvent("TimeEvents");
    evt.initTimeEvent("beginEvent", ttd.defaultView, 0);
    this.dispatchEvent(evt);
  },
  /*void*/  endElement : function() {
    var ttd = this.ownerDocument, evt = ttd.createEvent("TimeEvents");
    evt.initTimeEvent("endEvent", ttd.defaultView, 0);
    this.dispatchEvent(evt);
  },
  /*void*/  beginElementAt : function(/*float*/ offset) {
    var ntc = this.ownerDocument.documentElement.getCurrentTime();
    this._begin = offset + ntc;
  },
  /*void*/  endElementAt : function(/*float*/ offset) {
    var ntc = this.ownerDocument.documentElement.getCurrentTime();
    this._end = offset + ntc;
  }
};

function TimeEvent() {
  Event.apply(this);
  /*readonly attribute views::AbstractView*/  this.view;
  /*readonly attribute long*/             this.detail;
  return this;
};
TimeEvent.counstructor = Event;
TimeEvent.prototype = new Event();
/*void*/  TimeEvent.prototype.initTimeEvent = function(/*DOMString*/ typeArg, 
                                     /*views::AbstractView*/ viewArg, 
                                     /*long*/ detailArg) {
  this.type = typeArg;
  this.view = viewArg;
  this.detail = detailArg;
};
//#endif // _SMIL_IDL_﻿


//これを頭に付けたら、内部処理用
var  NAIBU = {};

/*
// File: svg.idl
#ifndef _SVG_IDL_
#define _SVG_IDL_
// For access to DOM2 core
#include "dom.idl"
// For access to DOM2 events
#include "events.idl"
// For access to those parts from DOM2 CSS OM used by SVG DOM.
#include "css.idl"
// For access to those parts from DOM2 Views OM used by SVG DOM.
#include "views.idl"
// For access to the SMIL OM used by SVG DOM.
#include "smil.idl"
#pragma prefix "dom.w3c.org"
#pragma javaPackage "org.w3c.dom"
module svg
{
  typedef dom::DOMString DOMString;
  typedef dom::DOMException DOMException;
  typedef dom::Element Element;
  typedef dom::Document Document;
  typedef dom::NodeList NodeList;
  // Predeclarations
  interface SVGElement;
  interface SVGLangSpace;
  interface SVGExternalResourcesRequired;
  interface SVGTests;
  interface SVGFitToViewBox;
  interface SVGZoomAndPan;
  interface SVGViewSpec;
  interface SVGURIReference;
  interface SVGPoint;
  interface SVGMatrix;
  interface SVGPreserveAspectRatio;
  interface SVGAnimatedPreserveAspectRatio;
  interface SVGTransformList;
  interface SVGAnimatedTransformList;
  interface SVGTransform;
  interface SVGICCColor;
  interface SVGColor;
  interface SVGPaint;
  interface SVGTransformable;
  interface SVGDocument;
  interface SVGSVGElement;
  interface SVGElementInstance;
  interface SVGElementInstanceList;
*/
function SVGException(code) {
  /*unsigned short*/  this.code = code;
  if (this.code === SVGException.SVG_WRONG_TYPE_ERR) {
    this.message = "SVG Wrong Type Error";
  } else if (this.code === SVGException.SVG_INVALID_VALUE_ERR) {
    this.message = "SVG Invalid Value Error";
  } else if (this.code === SVGException.SVG_MATRIX_NOT_INVERTABLE) {
    this.message = "SVG　Matrix Not Invertable";
  }
  return this;
};
SVGException.constructor = Error;
SVGException.prototype = new Error();
// SVGExceptionCode
/*const unsigned short*/ SVGException.SVG_WRONG_TYPE_ERR           = 0;
/*const unsigned short*/ SVGException.SVG_INVALID_VALUE_ERR        = 1;
/*const unsigned short*/ SVGException.SVG_MATRIX_NOT_INVERTABLE    = 2;

/*SVGElement
 *すべてのSVG関連要素の雛形となるオブジェクト
 */
function SVGElement() {
  Element.call(this);
  SVGStylable.call(this);             //ElementCSSInlineStyleのインタフェースを継承
  /*interface SVGTransformable : SVGLocatable
   *TransformListはtransform属性を行列で表現したあとのリスト構造
   */
  /*readonly attribute SVGAnimatedTransformList*/ this.transform = new SVGAnimatedTransformList();
　　//描画の際、SVGStylabaleで指定しておいたプロパティの処理をする
  this.addEventListener("DOMAttrModified", function(evt){
    if (evt.eventPhase === /*Event.BUBBLING_PHASE*/ 3) {
      return;
    }
    var name = evt.attrName,
        tar = evt.target;
    if (!!CSS2Properties[name] || (name.indexOf("-") > -1)) { //スタイルシートのプロパティならば
      tar._attributeStyle.setProperty(name, evt.newValue, "");
    }
    if (evt.relatedNode.localName === "id") { //xml:idあるいはid属性ならば
      tar.id = evt.newValue;
    } else if ((name === "transform") && !!tar.transform) {
      var tft = evt.newValue,
          degR = tar._degReg,
          coma = tft.match(tar._comaReg),   //コマンド文字にマッチ translate
          list = tft.match(tar._strReg),    //カッコ内のリストにマッチ (10 20 30...)
          a,b,c,d,e,f,
          lis,
          com,
          deg,
          rad,
          degli,
          s,
          cm,
          degz,
          etod = evt.target.ownerDocument.documentElement,
          ttb = tar.transform.baseVal;
      //transform属性の値を、SVGTransformListであるtransformプロパティに結びつける
      for (var j=0,cli=coma.length;j<cli;j++) {
        s = etod.createSVGTransform();
        lis = list[j],
        com = coma[j];
        deg = lis.match(degR);
        degli = deg.length;
        if (degli === 6) {
          cm = s.matrix;
          cm.a = +(deg[0]);
          cm.b = +(deg[1]);
          cm.c = +(deg[2]);
          cm.d = +(deg[3]);
          cm.e = +(deg[4]);
          cm.f = +(deg[5]);
        } else {
          if (degli === 3) {
            degz = +(deg[0]);
            s.setRotate(degz, +(deg[1]), +(deg[2]))
          } else if (degli <= 2) {
            degz = +(deg[0]);
            if (com === "translate") {
              s.setTranslate(degz, +(deg[1] || 0));
            } else if (com === "scale") {
              s.setScale(degz, +(deg[1] || deg[0]));
            } else if (com === "rotate") {
              s.setRotate(degz, 0, 0);
            } else if (com === "skewX") {
              s.setSkewX(degz);
            } else if (com === "skewY") {
              s.setSkewY(degz);
            }
          }
        }
        ttb.appendItem(s);
      }
      tft = degR = coma = list = a = b = c = d = e = f = lis = com = deg = rad = degli = s = cm = degz = etod = ttb = null;
    } else if (name === "style") {
      var sc = evt.newValue,
          style = tar.style,
          a,
          ai,
          m;
      style.cssText = sc;
      if (sc !== "") {
        //style属性値の解析
        sc = sc.replace(tar._shouReg, "")
               .replace(tar._conReg, ":")
               .replace(tar._bouReg, ";");
        a = sc.split(";");
        for (var i=0, ali=a.length;i<ali;++i) {
          ai = a[i],
          m = ai.split(":");
          if (ai !== "") {
            style.setProperty(m[0], m[1]);
          }
          ai = m = null;
        }
      }
      a = sc = style = null;
    } else if (name === "class") {
      tar.className = evt.newValue;
    } else if (name.indexOf("on") === 0) {           //event属性ならば
      /*ECMA 262-3においては、eval("(function(){})")はFunctionオブジェクトを返さなければならない
       *ところが、IEでは、undefinedの値を返してしまう。
       *他のブラウザではECMAの仕様にしたがっているようなので、IEだけの問題であることに注意
       */
      eval("document._s = (function(evt){" +evt.newValue+ "})");
      var v = name.substring(2, name.length);
      if (v === "load") {
        v = "SVGLoad";
      } else if (v === "unload") {
        v = "SVGUnload";
      } else if (v === "abort") {
        v = "SVGAbort";
      } else if (v === "error") {
        v = "SVGError";
      } else if (v === "resize") {
        v = "SVGResize";
      } else if (v === "scroll") {
        v = "SVGScroll";
      } else if (v === "zoom") {
        v = "SVGZoom";
      } else if (v === "begin") {
        v = "beginEvent";
      } else if (v === "end") {
        v = "endEvent";
      } else if (v === "repeat") {
        v = "repeatEvent";
      }
      tar.addEventListener(v, document._s, false);
    } else if (evt.relatedNode.nodeName === "xml:base") { //xml:base属性ならば
      tar.xmlbase = evt.newValue;
    } else if (!!tar[name] && (tar[name] instanceof SVGAnimatedLength)) {
      var tea = tar[name],
          tod = tar.ownerDocument.documentElement,
          tvw = tod.viewport.width,
          tvh = tod.viewport.height,
          s,
          n = evt.newValue.match(tar._NaNReg),
          type = /*SVGLength.SVG_LENGTHTYPE_NUMBER*/ 1,
          _parseFloat = parseFloat;
      if (!!n) {
        n = n[0];
      }
      if (n === "%") {
        if (tar._x1width[name]) {
          tea.baseVal._percent = tvw * 0.01;
        } else if (tar._y1height[name]) {
          tea.baseVal._percent = tvh * 0.01;
        } else {
          tea.baseVal._percent = Math.sqrt((tvw*tvw + tvh*tvh) / 2) * 0.01;
        }
        type = /*SVGLength.SVG_LENGTHTYPE_PERCENTAGE*/ 2;
      } else if (n === "em") {
        type = /*SVGLength.SVG_LENGTHTYPE_EMS*/ 3;
      } else if (n === "ex") {
        type = /*SVGLength.SVG_LENGTHTYPE_EXS*/ 4;
      } else if (n === "px") {
        type = /*SVGLength.SVG_LENGTHTYPE_PX*/ 5;
      } else if (n === "cm") {
        type = /*SVGLength.SVG_LENGTHTYPE_CM*/ 6;
      } else if (n === "mm") {
        type = /*SVGLength.SVG_LENGTHTYPE_MM*/ 7;
      } else if (n === "in") {
        type = /*SVGLength.SVG_LENGTHTYPE_IN*/ 8;
      } else if (n === "pt") {
        type = /*SVGLength.SVG_LENGTHTYPE_PT*/ 9;
      } else if (n === "pc") {
        type = /*SVGLength.SVG_LENGTHTYPE_PC*/ 10;
      }
      s = _parseFloat(evt.newValue);
      s = isNaN(s) ? 0 : s;
      tea.baseVal.newValueSpecifiedUnits(type, s);
      tea = tod = tvw = tvh = n = type = _parseFloat = s = null;
    }
    evt = _parseFloat = name = tar = null;
  }, false);
  return this;
};
SVGElement.constructor = Element;
SVGElement.prototype = new Element();

(function(){
  /*以下の正規表現は属性のパーサの際に用いる*/
  this._degReg = /[\-\d\.e]+/g;
  this._comaReg = /[A-Za-z]+(?=\s*\()/g;
  this._strReg =  /\([^\)]+\)/g;
  this._syouReg = /^[^a-z\-]+/;
  this._conReg = /\:\s+/g;
  this._bouReg = /\s*;[^a-z\-]*/g;
  this._NaNReg = /\D+$/;
  /*_cacheMatrixプロパティはSVGMatrixのキャッシュとして、
   *getCTMメソッドで使う
   */
  this._cacheMatrix = null;
  /*以下のオブジェクトは単位がパーセント付きの属性の名前を示し、処理に使う*/
  this._x1width = {
      "x" : 1,
      "x1" : 1,
      "x2" : 1,
      "width" : 1,
      "cx" : 1
  };
  this._y1height = {
      "y" : 1,
      "y1" : 1,
      "y2" : 1,
      "height" : 1,
      "cy" : 1      
  };
  /*String*/              this.id      = null;        //id属性の値
  /*String*/              this.xmlbase = null;   //xml:base属性の値
  /*SVGSVGElement*/       this.ownerSVGElement;  //ルート要素であるsvg要素
  /*readonly SVGElement*/ this.viewportElement;  //ビューポートを形成する要素(多くはsvg要素)
  /*readonly attribute SVGElement*/ this.nearestViewportElement  = null;
  /*readonly attribute SVGElement*/ this.farthestViewportElement = null;
  
  /*interface SVGLocatable*/
  /*SVGRect*/     this.getBBox = function(){
    var s = new SVGRect(),
        data = this._tar.path.value,
        vi = this.ownerDocument.documentElement.viewport,
        el = vi.width,
        et = vi.height,
        er = 0,
        eb = 0,
        degis = data.match(/[0-9\-]+/g),
        nx,
        ny;
    /*要素の境界領域を求める（四隅の座標を求める）
     *etは境界領域の上からビューポート(例えばsvg要素）の上端までの距離であり、eｂは境界領域の下からビューポートの下端までの距離
     *elは境界領域の左からビューポートの左端までの距離であり、erは境界領域の右からビューポートの右端までの距離
     */
    for (var i=0,degisli=degis.length;i<degisli;i+=2) {
      nx = +(degis[i]),
      ny = +(degis[i+1]);
      el = el > nx ? nx : el;
      et = et > ny ? ny : et;
      er = er > nx ? er : nx;
      eb = eb > ny ? eb : ny;
    }
    s.x      = el;
    s.y      = et;
    s.width  = er - el;
    s.height = eb - et;
    nx = ny = data = degis =el = et = er = eb = vi = null;
    return s;
  };

  /*getCTMメソッド
   *CTMとは現在の利用座標系に対する変換行列
   *注意点として、SVG1.1とSVG Tiny1.2では内容が異なる。たとえば、
   *1.2ではgetCTMが言及されていない
   *もし、要素の中心座標を取得したい人がいれば、transformプロパティのconsolidateメソッドを使うこと
   */
  /*SVGMatrix*/   this.getCTM = function() {
    var s, m;
    if (!!this._cacheMatrix) { //キャッシュがあれば
      s = this._cacheMatrix;
    } else {
      m = this.transform.baseVal.consolidate();
      if (m) {
        m = m.matrix;
      } else {
        m = this.ownerDocument.documentElement.createSVGMatrix();
      }
      if (this.parentNode && !!this.parentNode.getCTM) {
        s = this.parentNode.getCTM().multiply(m);
      } else {
        s = m;
      }
      m = null;
      this._cacheMatrix = s; //キャッシュをためて次回で使う
    }
    return s;
  };

  /*SVGMatrix*/   this.getScreenCTM = function(){
    if (!this.parentNode) {
      return null;
    }
    var view = this.nearestViewportElement || this.ownerDocument.documentElement;
    var s = view.getScreenCTM().multiply(this.getCTM());
    view = null;
    return s;
  };

  /*getTransformToElementメソッド
   *これは、あるelementへの変換行列を計算して返す
   *たとえばある要素から別の要素への引越しをする際の変換行列を算出することが可能
   */
  /*SVGMatrix*/   this.getTransformToElement = function(/*SVGElement*/ element ){
    var s = this.getScreenCTM().inverse().multiply(element.getScreenCTM());
    return s;
  };
}).apply(SVGElement.prototype);

function SVGAnimatedBoolean() {
  /*boolean*/  this.animVal = this.baseVal = true;
  return this;
};

function SVGAnimatedString() {
  /*String*/ this.animVal = this.baseVal = "";
  return this;
};

function SVGStringList() {
  return this;
};
SVGStringList.prototype = new Array();
(function(){
  /*readonly unsigned long*/ this.numberOfItems = 0;
  /*void*/   this.clear = function(){
    for (var i=0, tli=this.length;i<tli;++i) {
      delete this[i];
    }
    this.numberOfItems = 0;
  };
  /*DOMString*/ this.initialize = function(/*DOMString*/ newItem ) {
    this.clear();
    this[0] = newItem;
    this.numberOfItems = 1;
    return newItem;
  };
  /*DOMString*/ this.getItem = function(/*unsigned long*/ index ) {
    if (index >= this.numberOfItems || index < 0) {
      throw (new DOMException(DOMException.INDEX_SIZE_ERR));
    } else {
      return (this[index]);
    }
  };
  /*DOMString*/ this.insertItemBefore = function(/*DOMString*/ newItem, /*unsigned long*/ index ){
    if (index >= this.numberOfItems) {
      this.appendItem(newItem);
    } else {
      this.splice(index, 1, newItem, this.getItem[index]);
      ++this.numberOfItems;
    }
    return newItem;
  };
  /*DOMString*/ this.replaceItem = function(/*DOMString*/ newItem, /*unsigned long*/ index ){
    if (index >= this.numberOfItems || index < 0) {
      throw (new DOMException(DOMException.INDEX_SIZE_ERR));
    } else {
      this.splice(index, 1, newItem);
    }
    return newItem;
  };
                  //raises( DOMException, SVGException );
  /*DOMString*/ this.removeItem = function(/*unsigned long*/ index ){
    if (index >= this.numberOfItems || index < 0) {
      throw (new DOMException(DOMException.INDEX_SIZE_ERR));
    } else {
      this.splice(index, 1);
      --this.numberOfItems;
    }
    return newItem;
  };
  /*DOMString*/ this.appendItem = function(/*DOMString*/ newItem ){
    this[this.numberOfItems] = newItem;
    ++this.numberOfItems;
  };
}).apply(SVGStringList.prototype);

function SVGAnimatedEnumeration() {
  /*unsigned short*/ this.baseVal = 0;
                         // raises DOMException on setting
  /*readonly unsigned short*/ this.animVal = 0;
  return this;
};
function SVGAnimatedInteger() {
  /*long*/ this.baseVal = 0;
                         // raises DOMException on setting
  /*readonly long*/ this.animVal = 0;
  return this;
};
function SVGNumber() {
  /*float*/ this.value = 0;
                         // raises DOMException on setting
  return this;
};
function SVGAnimatedNumber() {
  /*float*/ this.baseVal = this.animVal = 0;
  return this;
};

function SVGNumberList() {
  return this;
};
for (var prop in SVGStringList.prototype) { //prototypeのコピーで継承を行う
  SVGNumberList.prototype[prop] = SVGStringList.prototype[prop];
}
function SVGAnimatedNumberList() {
  /*readonly SVGNumberList*/ this.animVal = this.baseVal = new SVGNumberList();
  return this;
};
/*SVGLengthクラス
 *長さを設定する（単位pxに統一する方便として使う）
 *valueInSpecifiedUnitsプロパティはpxに統一する前の数値。valueプロパティはpxに統一した後の数値
 */
function SVGLength() {
  return this;
};
(function(t) {
    // Length Unit Types
  /*const unsigned short*/ t.SVG_LENGTHTYPE_UNKNOWN    = 0;
  /*const unsigned short*/ t.SVG_LENGTHTYPE_NUMBER     = 1;
  /*const unsigned short*/ t.SVG_LENGTHTYPE_PERCENTAGE = 2;
  /*const unsigned short*/ t.SVG_LENGTHTYPE_EMS        = 3;
  /*const unsigned short*/ t.SVG_LENGTHTYPE_EXS        = 4;
  /*const unsigned short*/ t.SVG_LENGTHTYPE_PX         = 5;
  /*const unsigned short*/ t.SVG_LENGTHTYPE_CM         = 6;
  /*const unsigned short*/ t.SVG_LENGTHTYPE_MM         = 7;
  /*const unsigned short*/ t.SVG_LENGTHTYPE_IN         = 8;
  /*const unsigned short*/ t.SVG_LENGTHTYPE_PT         = 9;
  /*const unsigned short*/ t.SVG_LENGTHTYPE_PC         = 10;
})(SVGLength);

SVGLength.prototype = {
  /*readonly attribute unsigned short*/ unitType : SVGLength.SVG_LENGTHTYPE_UNKNOWN,
  /*attribute float*/          value : 0,                  //利用単位における値
  /*attribute float*/          valueInSpecifiedUnits : SVGLength.SVG_LENGTHTYPE_UNKNOWN,  //unitTypeにおける値
  /*attribute DOMString*/      valueAsString : "0",
  _percent : 0.01, //単位に%が使われていた場合、このプロパティの数値を1%として使う
  _fontSize : 12, //単位のemとexで使われるfont-sizeの値
/*newValueSpedifiedUnitsメソッド
 *新しくunitTypeにおける値を設定する
 *例:2ｐｘならば、x.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PX, 2);となる
 */
  newValueSpecifiedUnits : function (/*unsigned short*/ unitType, /*float*/ valueInSpecifiedUnits) {
    var n = 1,
       _s = ""; //nは各単位から利用単位への変換数値。_sは単位の文字列を表す
    if (unitType === /*SVGLength.SVG_LENGTHTYPE_NUMBER*/ 1) {
    } else if (unitType === /*SVGLength.SVG_LENGTHTYPE_PX*/ 5) {
      _s = "px";
    } else if (unitType === /*SVGLength.SVG_LENGTHTYPE_PERCENTAGE*/ 2) {
      n = this._percent;
      _s = "%"
    } else if (unitType === /*SVGLength.SVG_LENGTHTYPE_EMS*/ 3) {
      n = this._fontSize;
      _s = "em";
    } else if (unitType === /*SVGLength.SVG_LENGTHTYPE_EXS*/ 4) {
      n = this._fontSize * 0.5;
      _s = "ex";
    } else if (unitType === /*SVGLength.SVG_LENGTHTYPE_CM*/ 6) {
      n = 35.43307;
      _s = "cm";
    } else if (unitType === /*SVGLength.SVG_LENGTHTYPE_MM*/ 7) {
      n = 3.543307;
      _s = "mm";
    } else if (unitType === /*SVGLength.SVG_LENGTHTYPE_IN*/ 8) {
      n = 90;
      _s = "in";
    } else if (unitType === /*SVGLength.SVG_LENGTHTYPE_PT*/ 9) {
      n = 1.25;
      _s = "pt";
    } else if (unitType === /*SVGLength.SVG_LENGTHTYPE_PC*/ 10) {
      n = 15;
      _s = "pc";
    } else {
      throw new DOMException(DOMException.NOT_SUPPORTED_ERR);
    }
    this.unitType = unitType;
    this.value = valueInSpecifiedUnits * n;
    this.valueInSpecifiedUnits = valueInSpecifiedUnits;
    this.valueAsString = valueInSpecifiedUnits + _s;
    valueInSpecifiedUnits = unitType = n = _s = null;
  },
/*convertToSpecifiedUnitsメソッド
 *valueプロパティを書き換えずに、単位だけを変換する
 *例：2cmをmmに変換したい場合
 * x.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_CM, 2);
 * x.convertToSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_MM);
 * alert(x.valueAsString); //20mm
 */
  convertToSpecifiedUnits : function (/*unsigned short*/ unitType) {
    if (this.value === 0) {
      this.newValueSpecifiedUnits(unitType, 0);
      return;
    }
    var v = this.value;
    this.newValueSpecifiedUnits(unitType, this.valueInSpecifiedUnits);
    v = v / this.value * this.valueInSpecifiedUnits;
    this.newValueSpecifiedUnits(unitType, v); 
  },
  /*_emToUnitメソッド
   *emやexが単位に使われていたときに、@fontSizeの値を手がかりに、新たな値へとvalueを変換させる
   *単位が%の場合は、新しいvalueへと変換させておく
   */
  _emToUnit : function (/*float*/ fontSize) {
    if ((this.unitType === /*SVGLength.SVG_LENGTHTYPE_EMS*/ 3) || (this.unitType === 4)) {
      this._fontSize = fontSize;
      this.newValueSpecifiedUnits(this.unitType, this.valueInSpecifiedUnits);
    }
  }
};
function SVGAnimatedLength() {
  /*readonly SVGLength*/ this.animVal;
  this.baseVal = new SVGLength();
  this.baseVal.unitType = 1;
  return this;
};
function SVGLengthList() {
  return this;
};
for (var prop in SVGStringList.prototype) { //prototypeのコピーで継承を行う
  SVGLengthList.prototype[prop] = SVGStringList.prototype[prop];
}
function SVGAnimatedLengthList() {
  /*readonly SVGNumberList*/ this.animVal = this.baseVal = new SVGLengthList();
  return this;
};
function SVGAngle() { 
  return this;
};
SVGAngle.prototype = {
  /*readonly attribute unsigned short*/ unitType : 0,
  /*attribute float*/     value : 0,
                         // raises DOMException on setting
  /*attribute float*/     valueInSpecifiedUnits : 0,
                         // raises DOMException on setting
  /*attribute DOMString*/ valueAsString : "0",
                         // raises DOMException on setting
  /*void*/ newValueSpecifiedUnits : function (/*in unsigned short*/ unitType, /*in float*/ valueInSpecifiedUnits ) {
    var n = 1,
        _s = ""; //nは各単位から度への変換数値。_sは単位の文字列を表す
    if (unitType === SVGAngle.SVG_ANGLETYPE_UNSPECIFIED) {
    } else if (unitType === SVGAngle.SVG_ANGLETYPE_DEG) {
      _s = "deg"
    } else if (unitType === SVGAngle.SVG_ANGLETYPE_RAD) {
      n = 　Math.PI　/　180;
      _s = "rad";
    } else if (unitType === SVGAngle.SVG_ANGLETYPE_GRAD) {
      n = 9 / 10;
      _s = "grad";
    } else {
      throw new DOMException(DOMException.NOT_SUPPORTED_ERR);
    }
    this.unitType = unitType;
    this.value = valueInSpecifiedUnits * n;
    this.valueInSpecifiedUnits = valueInSpecifiedUnits;
    this.valueAsString = valueInSpecifiedUnits + _s;
    n = _s = null;
    //raises( DOMException );
  },
  /*void*/ convertToSpecifiedUnits : function (/*in unsigned short*/ unitType ) {
    if (this.value === 0) {
      this.newValueSpecifiedUnits(unitType, 0);
      return;
    }
    var v = this.value;
    this.newValueSpecifiedUnits(unitType, this.valueInSpecifiedUnits);
    v = v / this.value * this.valueInSpecifiedUnits;
    this.newValueSpecifiedUnits(unitType, v); 
    //raises( DOMException );
  }
};
// Angle Unit Types
/*const unsigned short*/ SVGAngle.SVG_ANGLETYPE_UNKNOWN     = 0;
/*const unsigned short*/ SVGAngle.SVG_ANGLETYPE_UNSPECIFIED = 1;
/*const unsigned short*/ SVGAngle.SVG_ANGLETYPE_DEG         = 2;
/*const unsigned short*/ SVGAngle.SVG_ANGLETYPE_RAD         = 3;
/*const unsigned short*/ SVGAngle.SVG_ANGLETYPE_GRAD        = 4;
function SVGAnimatedAngle() { 
  /*readonly attribute SVGAngle*/ this.baseVal = new SVGAngle();
  /*readonly attribute SVGAngle*/ this.animVal = this.baseVal;
  return this;
};
function SVGColor() {
  CSSValue.apply(this);
  /*readonly css::RGBColor*/  this.rgbColor  = new RGBColor();
  return this;
};

  // Color Types
/*unsigned short*/ SVGColor.SVG_COLORTYPE_UNKNOWN           = 0;
/*unsigned short*/ SVGColor.SVG_COLORTYPE_RGBCOLOR          = 1;
/*unsigned short*/ SVGColor.SVG_COLORTYPE_RGBCOLOR_ICCCOLOR = 2;
/*unsigned short*/ SVGColor.SVG_COLORTYPE_CURRENTCOLOR      = 3;
SVGColor.prototype = new CSSValue();  //ノードのプロトタイプチェーンを作って、継承
SVGColor.constructor = CSSValue;

(function(){
  /*readonly unsigned short*/ this.colorType = /*SVGColor.SVG_COLORTYPE_UNKNOWN*/ 0;
  /*readonly SVGICCColor*/    this.iccColor = null;
  this._regD = /\d+/g;
  this._regDP = /[\d.]+%/g;
  /*void*/ this.setRGBColor = function(/*DOMString*/ rgbColor ){
  var s,
      _parseInt,
      r, g, b,
      c;
  if (!rgbColor || (typeof rgbColor !== "string")) {
    throw new SVGException(SVGException.SVG_INVALID_VALUE_ERR);
  }
  rgbColor = this._keywords[rgbColor] || rgbColor;
  if (rgbColor.indexOf("%", 5) > 0) {      // %を含むrgb形式の場合
    rgbColor = rgbColor.replace(this._regDP, function(s) {
      return Math.round((2.55 * parseFloat(s)));
    });
    s = rgbColor.match(this._regD);
  } else if (rgbColor.indexOf("#") === 0) {  //#を含む場合
    s = [];
    _parseInt = parseInt;
    r = rgbColor.charAt(1);
    g = rgbColor.charAt(2);
    b = rgbColor.charAt(3)
    if (rgbColor.length < 5) {
      c = "#" + r + r + g + g + b + b;
      rgbColor = c;
      c = null;
    }
    s[0] = _parseInt(r+rgbColor.charAt(2), 16)+ "";
    s[1] = _parseInt(rgbColor.charAt(3)+rgbColor.charAt(4), 16)+ "";
    s[2] = _parseInt(rgbColor.charAt(5)+rgbColor.charAt(6), 16)+ "";
    r = g = b = null;
  } else {
    s = rgbColor.match(this._regD);
    if (!s || (s.length < 3)) { //数値が含まれていなければ強制的に終了
      rgbColor = null;
      throw new SVGException(SVGException.SVG_INVALID_VALUE_ERR);
    }
  }
  this.rgbColor.red.setFloatValue(/*CSSPrimitiveValue.CSS_NUMBER*/ 1, s[0]);
  this.rgbColor.green.setFloatValue(1, s[1]);
  this.rgbColor.blue.setFloatValue(1, s[2]);
  rgbColor = s = _parseInt = null;
};

//                    raises( SVGException );
/*void*/ this.setColor =function(/*unsigned short*/ colorType, /*DOMString*/ rgbColor, /*DOMString*/ iccColor ){
  this.colorType = colorType;
  if ((colorType === /*SVGColor.SVG_COLORTYPE_RGBCOLOR*/ 1) || (colorType === /*SVGColor.SVG_COLORTYPE_CURRENTCOLOR*/ 3)) {
    this.setRGBColor(rgbColor);
  }
  colorType = rgbColor = null;
}
//                    raises( SVGException );
//色キーワード
this._keywords = {
    aliceblue:    "rgb(240, 248, 255)",
    antiquewhite: "rgb(250, 235, 215)",
    aqua:         "rgb( 0, 255, 255)",
    aquamarine:   "rgb(127, 255, 212)",
    azure:        "rgb(240, 255, 255)",
    beige:        "rgb(245, 245, 220)",
    bisque:       "rgb(255, 228, 196)",
    black:        "rgb( 0, 0, 0)",
    blanchedalmond:"rgb(255, 235, 205)",
    blue:         "rgb( 0, 0, 255)",
    blueviolet:   "rgb(138, 43, 226)",
    brown:        "rgb(165, 42, 42)",
    burlywood:    "rgb(222, 184, 135)",
    cadetblue:    "rgb( 95, 158, 160)",
    chartreuse:   "rgb(127, 255, 0)",
    chocolate:    "rgb(210, 105, 30)",
    coral:        "rgb(255, 127, 80)",
    cornflowerblue:"rgb(100, 149, 237)",
    cornsilk:     "rgb(255, 248, 220)",
    crimson:      "rgb(220, 20, 60)",
    cyan:         "rgb( 0, 255, 255)",
    darkblue:     "rgb( 0, 0, 139)",
    darkcyan:     "rgb( 0, 139, 139)",
    darkgoldenrod:"rgb(184, 134, 11)",
    darkgray:     "rgb(169, 169, 169)",
    darkgreen:    "rgb( 0, 100, 0)",
    darkgrey:     "rgb(169, 169, 169)",
    darkkhaki:    "rgb(189, 183, 107)",
    darkmagenta:  "rgb(139, 0, 139)",
    darkolivegreen:"rgb( 85, 107, 47)",
    darkorange:    "rgb(255, 140, 0)",
    darkorchid:   "rgb(153, 50, 204)",
    darkred:      "rgb(139, 0, 0)",
    darksalmon:   "rgb(233, 150, 122)",
    darkseagreen: "rgb(143, 188, 143)",
    darkslateblue:"rgb( 72, 61, 139)",
    darkslategray:"rgb( 47, 79, 79)",
    darkslategrey:"rgb( 47, 79, 79)",
    darkturquoise:"rgb( 0, 206, 209)",
    darkviolet:   "rgb(148, 0, 211)",
    deeppink:     "rgb(255, 20, 147)",
    deepskyblue:  "rgb( 0, 191, 255)",
    dimgray:      "rgb(105, 105, 105)",
    dimgrey:      "rgb(105, 105, 105)",
    dodgerblue:   "rgb( 30, 144, 255)",
    firebrick:    "rgb(178, 34, 34)",
    floralwhite:  "rgb(255, 250, 240)",
    forestgreen:  "rgb( 34, 139, 34)",
    fuchsia:      "rgb(255, 0, 255)",
    gainsboro:    "rgb(220, 220, 220)",
    ghostwhite:   "rgb(248, 248, 255)",
    gold:         "rgb(255, 215, 0)",
    goldenrod:    "rgb(218, 165, 32)",
    gray:         "rgb(128, 128, 128)",
    grey:         "rgb(128, 128, 128)",
    green:        "rgb( 0, 128, 0)",
    greenyellow:  "rgb(173, 255, 47)",
    honeydew:     "rgb(240, 255, 240)",
    hotpink:      "rgb(255, 105, 180)",
    indianred:    "rgb(205, 92, 92)",
    indigo:       "rgb( 75, 0, 130)",
    ivory:        "rgb(255, 255, 240)",
    khaki:        "rgb(240, 230, 140)",
    lavender:     "rgb(230, 230, 250)",
    lavenderblush:"rgb(255, 240, 245)",
    lawngreen:    "rgb(124, 252, 0)",
    lemonchiffon: "rgb(255, 250, 205)",
    lightblue:    "rgb(173, 216, 230)",
    lightcoral:   "rgb(240, 128, 128)",
    lightcyan:    "rgb(224, 255, 255)",
    lightgoldenrodyellow:"rgb(250, 250, 210)",
    lightgray:    "rgb(211, 211, 211)",
    lightgreen:   "rgb(144, 238, 144)",
    lightgrey:    "rgb(211, 211, 211)",
    lightpink:    "rgb(255, 182, 193)",
    lightsalmon:  "rgb(255, 160, 122)",
    lightseagree: "rgb( 32, 178, 170)",
    lightskyblue: "rgb(135, 206, 250)",
    lightslategray:"rgb(119, 136, 153)",
    lightslategrey:"rgb(119, 136, 153)",
    lightsteelblue:"rgb(176, 196, 222)",
    lightyellow:  "rgb(255, 255, 224)",
    lime:         "rgb( 0, 255, 0)",
    limegreen:    "rgb( 50, 205, 50)",
    linen:        "rgb(250, 240, 230)",
    magenta:      "rgb(255, 0, 255)",
    maroon:       "rgb(128, 0, 0)",
    mediumaquamarine:"rgb(102, 205, 170)",
    mediumblue:    "rgb( 0, 0, 205)",
    mediumorchid:  "rgb(186, 85, 211)",
    mediumpurple:  "rgb(147, 112, 219)",
    mediumseagreen:"rgb( 60, 179, 113)",
    mediumslateblue:"rgb(123, 104, 238)",
    mediumspringgreen:"rgb( 0, 250, 154)",
    mediumturquoise:"rgb( 72, 209, 204)",
    mediumvioletred:"rgb(199, 21, 133)",
    midnightblue:  "rgb( 25, 25, 112)",
    mintcream:     "rgb(245, 255, 250)",
    mistyrose:     "rgb(255, 228, 225)",
    moccasin:      "rgb(255, 228, 181)",
    navajowhite:   "rgb(255, 222, 173)",
    navy:          "rgb( 0, 0, 128)",
    oldlace:       "rgb(253, 245, 230)",
    olive:         "rgb(128, 128, 0)",
    olivedrab:     "rgb(107, 142, 35)",
    orange:        "rgb(255, 165, 0)",
    orangered:     "rgb(255, 69, 0)",
    orchid:        "rgb(218, 112, 214)",
    palegoldenrod: "rgb(238, 232, 170)",
    palegreen:     "rgb(152, 251, 152)",
    paleturquoise: "rgb(175, 238, 238)",
    palevioletred: "rgb(219, 112, 147)",
    papayawhip:    "rgb(255, 239, 213)",
    peachpuff:     "rgb(255, 218, 185)",
    peru:          "rgb(205, 133, 63)",
    pink:          "rgb(255, 192, 203)",
    plum:          "rgb(221, 160, 221)",
    powderblue:    "rgb(176, 224, 230)",
    purple:        "rgb(128, 0, 128)",
    red:           "rgb(255, 0, 0)",
    rosybrown:     "rgb(188, 143, 143)",
    royalblue:     "rgb( 65, 105, 225)",
    saddlebrown:   "rgb(139, 69, 19)",
    salmon:        "rgb(250, 128, 114)",
    sandybrown:    "rgb(244, 164, 96)",
    seagreen:      "rgb( 46, 139, 87)",
    seashell:      "rgb(255, 245, 238)",
    sienna:        "rgb(160, 82, 45)",
    silver:        "rgb(192, 192, 192)",
    skyblue:       "rgb(135, 206, 235)",
    slateblue:     "rgb(106, 90, 205)",
    slategray:     "rgb(112, 128, 144)",
    slategrey:     "rgb(112, 128, 144)",
    snow:          "rgb(255, 250, 250)",
    springgreen:   "rgb( 0, 255, 127)",
    steelblue:     "rgb( 70, 130, 180)",
    tan:           "rgb(210, 180, 140)",
    teal:          "rgb( 0, 128, 128)",
    thistle:       "rgb(216, 191, 216)",
    tomato:        "rgb(255, 99, 71)",
    turquoise:     "rgb( 64, 224, 208)",
    violet:        "rgb(238, 130, 238)",
    wheat:         "rgb(245, 222, 179)",
    white:         "rgb(255, 255, 255)",
    whitesmoke:    "rgb(245, 245, 245)",
    yellow:        "rgb(255, 255, 0)",
    yellowgreen:   "rgb(154, 205, 50)"
};
}).apply(SVGColor.prototype);

function SVGRect() { 
  /*float*/ this.x      = 0;
                         // raises DOMException on setting
  /*float*/ this.y      = 0;
                         // raises DOMException on setting
  /*float*/ this.width  = 0;
                         // raises DOMException on setting
  /*float*/ this.height = 0;
                         // raises DOMException on setting
  return this;
};

function SVGAnimatedRect() { 
  /*readonly SVGRect*/ this.animVal = this.baseVal = new SVGRect();
  return this;
};

SVGUnitTypes = { 
  // Unit Types
  /*unsigned short*/ SVG_UNIT_TYPE_UNKNOWN           : 0,
  /*unsigned short*/ SVG_UNIT_TYPE_USERSPACEONUSE    : 1,
  /*unsigned short*/ SVG_UNIT_TYPE_OBJECTBOUNDINGBOX : 2
};
function SVGStylable() { 
  /*readonly attribute SVGAnimatedString*/ this.className = new SVGAnimatedString();
  /*readonly attribute css::CSSStyleDeclaration*/ this.style = new CSSStyleDeclaration();
  this._attributeStyle = new CSSStyleDeclaration(); //プレゼンテーション属性の値を格納する
  //styleのcssTextプロパティを解析するリスナーを登録しておく
};
/*getPresentationAttributeメソッド
 *プレゼンテーション属性の値をCSSValueとして得る。これはCSSのスタイルの設定値を定めるときや、内部の動的処理に役立つ
 */
/*css::CSSValue*/ SVGElement.prototype.getPresentationAttribute = function( /*DOMString*/ name ){
  var s = this._attributeStyle.getPropertyCSSValue(name);
  if (s) {
    return s;
  } else {
    return null;
  }
};

/*SVGURIReferenceオブジェクトはURI参照を用いる要素に適用される
 *SIEでは、もっぱらXLink言語の処理を行う
 */
function SVGURIReference() {
  /*readonly SVGAnimatedString*/ this.href = new SVGAnimatedString();
  this._instance = null; //埋め込みの場合に、読み込んだDOMツリーを結び付けておくプロパティ
  this._text = "";
  this.addEventListener("DOMAttrModified", function(evt){
    if ((evt.relatedNode.namespaceURI === "http://www.w3.org/1999/xlink") && (evt.attrName === "xlink:href")) {
      evt.target.href.baseVal = evt.newValue;
      /*_svgload_limitedを+1とすることで、
       *SVGLoadイベントは発火されなくなる。1を引く必要がある
       */
      evt.target.ownerDocument.documentElement._svgload_limited++;
    }
    evt = null;
  }, false);
  this.addEventListener("DOMNodeInserted", function(evt){
    var tar = evt.target;
    if (evt.eventPhase === /*Event.BUBBLING_PHASE*/ 3) {
      return; //強制終了させる
    }
    tar.addEventListener("DOMNodeInsertedIntoDocument", function(evt){
      var tar = evt.target,
          base,
          href = tar.href.baseVal,
          show, egbase, ep, b, lh, uri, xmlhttp, ui, id, doc, ele, ev;
      /*xlink:href属性とxml:base属性を手がかりに、
       *ハイパーリンクのURIを決定する処理を行う
       */
      if (href !== "") { //xlink:href属性が指定されたとき
        egbase = tar.xmlbase;
        if (!egbase) {
          ep = tar.parentNode;
          b = null;
          while (!b && ep) {
            b = ep.xmlbase;
            ep = ep.parentNode;
          }
          base = b;
          if (!b) {                        //xml:baseの指定がなければ
            if (href.indexOf("#") !== 0) { //href属性において#が一番につかない場合
              lh = location.href;
              base = lh.replace(/\/[^\/]+?$/, "/"); //URIの最後尾にあるファイル名は消す。例: /n/sie.js -> /n/
            } else {
              base = location.href;
            }
          }
        } else {
          base = egbase;
        }
        if (href.indexOf(":") !== -1) { //絶対URIの場合
          base =  "";
        }
        uri = base + href;
        show = tar.getAttributeNS("http://www.w3.org/1999/xlink", "show") || "embed";
        if (href.indexOf(".") === 0) {  //相対URIの場合
          uri = href;
        }
        if (show === "replace") {
          tar._tar.setAttribute("href", uri);
        } else if (show === "new") {
          tar._tar.setAttribute("target", "_blank");
          tar._tar.setAttribute("href", uri);
        } else if (show === "embed") {
          xmlhttp = NAIBU.xmlhttp;
          ui = uri.indexOf("#");
          if (ui > -1) {
            id = uri.substring(ui+1, uri.length);
            uri = uri.replace(/#.+$/, "");
          } else {
            id = null;
          }
          if (href.indexOf("#") === 0) { //URIが#で始まるのであれば
            doc = tar.ownerDocument;
            ele = doc.getElementById(id);
            tar._instance = ele;
            ev = doc.createEvent("SVGEvents");
            ev.initEvent("S_Load", false, false);
            tar.dispatchEvent(ev);
            tar = xmlhttp = null;
          } else if (uri.indexOf("data:") > -1) {
            tar._tar.src = uri;
            tar = xmlhttp = null;
          } else if ((uri.indexOf("http:") > -1) || (uri.indexOf(".") === 0)){
            if ((tar.localName === "image") && (uri.indexOf(".svg") === -1)) {
              tar._tar.src = uri;
            } else {
              /*ここの_svgload_limitedは、リンクを読み込んだ後でSVGLoadイベントを実行させるという遅延処理で必要*/
              tar.ownerDocument.documentElement._svgload_limited++;
              xmlhttp.open("GET", uri, false);
              xmlhttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
              xmlhttp.onreadystatechange = function() {
                if ((xmlhttp.readyState === 4) && (xmlhttp.status === 200)) {
                  var type = xmlhttp.getResponseHeader('Content-Type') || "text",
                      doc, str, ele, ev;
                  if ((type.indexOf("text") > -1) || (type.indexOf("xml") > -1) || (type.indexOf("script") > -1)) { //ファイルがtext形式である場合
                    /*responseXMLを使うと、時々、空のデータを返すことがあるため（原因は不明）、
                     *ここでは、responseTextを用いる
                     */
                    /*script要素とstyle要素は、
                     *_textプロパティに読み込んだテキストを格納しておく
                     *それら以外は、_instanceプロパティにDOMツリーを格納しておく
                     */
                    if (tar.localName !== "script" && tar.localName !== "style") {
                      doc = new ActiveXObject("MSXML2.DomDocument");
                      str = xmlhttp.responseText.replace(/!DOCTYPE/,"!--").replace(/(dtd">|\]>)/,"-->");
                      NAIBU.doc.async = false;
                      NAIBU.doc.validateOnParse = false;
                      NAIBU.doc.resolveExternals = false;
                      NAIBU.doc.preserveWhiteSpace = false;
                      doc.loadXML(str);
                      ele = doc.documentElement;
                      tar._instance = tar.ownerDocument.importNode(ele, true);
                      if (id) {
                        tar._instance = tar._instance.ownerDocument.getElementById(id);
                      }
                    } else {
                      tar._text = xmlhttp.responseText;
                    }
                  } else if (!!tar._tar) {
                    tar._tar.src = uri;
                  }
                  /*S_LoadイベントとはSIE独自のイベント。
                   *XLink言語によって、リンク先のコンテンツが読み込まれた時点で発火する
                   */
                  ev = tar.ownerDocument.createEvent("SVGEvents");
                  ev.initEvent("S_Load", false, false);
                  tar.dispatchEvent(ev);
                  tar.ownerDocument.documentElement._svgload_limited--;
                  /*すべてのリンクが読み込みを終了した場合、SVGLoadイベントを発火*/
                  if (tar.ownerDocument.documentElement._svgload_limited < 0) {
                    ev = tar.ownerDocument.createEvent("SVGEvents");
                    ev.initEvent("SVGLoad", false, false);
                    tar.ownerDocument.documentElement.dispatchEvent(ev);
                  }
                  tar = type = doc = str = ev = null;
                  /*IEのメモリリーク対策として、空関数を入力*/
                  xmlhttp.onreadystatechange = NAIBU.emptyFunction;
                  xmlhttp = null;
                }
              };
              xmlhttp.send(null);
            }
          }
        }
        tar.ownerDocument.documentElement._svgload_limited--;
      }
      evt = base = href = egbase = ep = b = lh = uri = ui = id = doc = ele = ev = show= null;
    }, false);
    tar = evt = null;
  }, false);
  return this;
};
function SVGCSSRule() { 
  CSSRule.apply(this, arguments);
  // Additional CSS RuleType to support ICC color specifications
  /*const unsigned short*/ this.COLOR_PROFILE_RULE = 7;
  return this;
};
SVGCSSRule.constructor = CSSRule;
SVGCSSRule.prototype = new CSSRule();  //ノードのプロトタイプチェーンを作って、継承

/*SVGDocument
 *SVGの文書オブジェクト
 */
function SVGDocument(){
  Document.apply(this);
  DocumentStyle.apply(this);
  /*readonly DOMString*/     this.title    = "";
  /*readonly DOMString*/     this.referrer = document.referrer;
  /*readonly DOMString*/     this.domain   = document.domain;
  /*readonly DOMString*/     this.URL      = document.location;
  /*readonly SVGSVGElement*/ this.rootElement;
  return this;
};
SVGDocument.constructor = Document;
SVGDocument.prototype = new Document();  //ノードのプロトタイプチェーンを作って、継承

/*SVGSVGElement
 *svg要素をあらわすオブジェクト
 */
function SVGSVGElement(_doc) {
  SVGElement.apply(this, arguments);
  this._tar = _doc.createElement("v:group");
  _doc = null;
  /*_svgload_limitedはSVGLoadイベントを発火させる判定基準。
   * Xlink言語が使われていない限り0であり、SVGLoadイベントが発火される*/
  this._svgload_limited = 0;
/*                SVGElement,
                SVGTests,
                SVGLangSpace,
                SVGExternalResourcesRequired,
                SVGStylable,
                SVGLocatable,
                SVGFitToViewBox,
                SVGZoomAndPan,
                events::EventTarget,
                events::DocumentEvent,
                css::ViewCSS,
                css::DocumentCSS {*/
  /*以下のx,y,width,heightプロパティは
   *それぞれ、svg要素の同名属性に対応。たとえば、xならば、x属性に対応している
   *1000というのは、W3Cで触れていないため、独自の初期値を採用
   */
  /*readonly SVGAnimatedLength*/ this.x      = new SVGAnimatedLength();
  /*readonly SVGAnimatedLength*/ this.y      = new SVGAnimatedLength();
  /*readonly SVGAnimatedLength*/ this.width  = new SVGAnimatedLength();
  /*readonly SVGAnimatedLength*/ this.height = new SVGAnimatedLength();
  /*DOMString*/                  this.contentScriptType = "application/ecmascript"; //古い仕様では、text/ecmascript
  /*DOMString*/                  this.contentStyleType  = "text/css";
  /*readonly SVGRect*/           this.viewport          = this.createSVGRect();
  /*useCurrentViewプロパティ
   * view要素やハイパーリンクなどで呼び出された場合、true。それ以外の通常表示はfalse。
   */
  /*boolean*/                    this.useCurrentView    = false;
  /*currentViewプロパティ
   * ズームやパンがされていない初期表示のviewBoxプロパティなどを示す。通常はDOM属性と連動
   */
  /*readonly SVGViewSpec*/       this.currentView       = new SVGViewSpec(this);
  /*もし、画像をズームやパンしたとき、どのような倍率になるかを
   *以下のプロパティを使って次の行列で示すことができる
   *2x3 行列 [a b c d e f] = [currentScale 0 0 currentScale currentTranslate.x currentTranslate.y] 
   */
  /*float*/                      this.currentScale     = 1;
  /*readonly SVGPoint*/          this.currentTranslate = this.createSVGPoint();
  /*以下は、SVGFitToViewBoxのインターフェースを用いる
   *もし、ズームやパンがあれば、真っ先にこれらのプロパティを別のオブジェクトに変更すること
   */
  /*readonly SVGAnimatedRect*/   this.viewBox = this.currentView.viewBox;
  /*readonly SVGAnimatedPreserveAspectRatio*/ this.preserveAspectRatio = this.currentView.preserveAspectRatio;
  /*unsigned short*/             this.zoomAndPan = SVGZoomAndPan.SVG_ZOOMANDPAN_DISABLE;
  this._tx = 0;
  this._ty = 0;
  /*int*/                       this._currentTime = 0;
  /*DOMAttrModifiedイベントを利用して、
   *随時、属性の値をDOMプロパティに変換しておくリスナー登録
   */
  this.addEventListener("DOMAttrModified", function(evt){
    if (evt.eventPhase === /*Event.BUBBLING_PHASE*/ 3) {
      return; //強制終了させる
    }
    var tar = evt.target,
        name = evt.attrName,
        tv, ovb, par, tp, sa, mos;
    if (name === "viewBox") {
      tar._cacheScreenCTM = null;
      tv = tar.viewBox.baseVal;
      ovb = evt.newValue.replace(/^\s+|\s+$/g, "").split(/[\s,]+/);
      tv.x = parseFloat(ovb[0]);
      tv.y = parseFloat(ovb[1]);
      tv.width = parseFloat(ovb[2]);
      tv.height = parseFloat(ovb[3]);
      tar.viewBox.baseVal._isUsed = 1;
    } else if (name === "preserveAspectRatio") {
      tar._cacheScreenCTM = null;
      par = evt.newValue;
      tp = tar.preserveAspectRatio.baseVal;
      sa = 1;
      mos = SVGPreserveAspectRatio.SVG_MEETORSLICE_UNKNOWN;
      if (!!par.match(/x(Min|Mid|Max)Y(Min|Mid|Max)(?:\s+(meet|slice))?/)) {
        switch (RegExp.$1) {
          case "Min":
            sa += 1;
          break;
          case "Mid":
            sa += 2;
          break;
          case "Max":
            sa += 3;
          break;
        }
        switch (RegExp.$2) {
          case "Min":
          break;
          case "Mid":
            sa += 3;
          break;
          case "Max":
            sa += 6;
          break;
        }
        if (RegExp.$3 === "slice") {
          mos = SVGPreserveAspectRatio.SVG_MEETORSLICE_SLICE;
        } else {
          mos = SVGPreserveAspectRatio.SVG_MEETORSLICE_MEET;
        }
      }
      tp.align = sa;
      tp.meetOrSlice = mos;
    } else if (name === "width") {
      /*viewportを更新する*/
      tar.viewport.width = tar.width.baseVal.value;
    } else if (name === "height") {
      tar.viewport.height = tar.height.baseVal.value;
    }
    evt = name = tv = ovb = par = tp = sa = mos = null;
  }, false);
  this.addEventListener("SVGLoad", function(evt){
    /*以下のDOMAttrModifiedは浮上フェーズのときに、再描画をするように
     *処理を書いたもの。属性が書き換わるたびに、再描画される
     */
    evt.target.addEventListener("DOMAttrModified", function(evt){
      if (evt.eventPhase === /*Event.BUBBLING_PHASE*/ 3) {
        var tar = evt.target,
            evtt;
        if (tar.parentNode) {
          evtt = tar.ownerDocument.createEvent("MutationEvents");
          evtt.initMutationEvent("DOMNodeInsertedIntoDocument", false, false, null, null, null, null, null);
          evtt.target = tar;
          evtt.eventPhase = /*Event.AT_TARGET*/ 2;
          var tce = tar._capter; //tceは登録しておいたリスナーのリスト
          for (var j=0,tcli=tce.length;j<tcli;++j){
            if (tce[j]) {
              tce[j].handleEvent(evtt);
            }
          }
          if (((tar.localName === "g") || (tar.localName === "a")) && (tar.namespaceURI === "http://www.w3.org/2000/svg")) {
            tar._currentStyle = tar._cacheMatrix = null; //キャッシュを消去
            if (tar.firstChild) {
              var slist = tar.getElementsByTagNameNS("http://www.w3.org/2000/svg", "*");
              for (var i=0,sli=slist.length;i<sli;++i) {
                tar = slist[i];
                tar._currentStyle = tar._cacheMatrix = null;
                evtt = tar.ownerDocument.createEvent("MutationEvents");
                evtt.initMutationEvent("DOMNodeInsertedIntoDocument", false, false, null, null, null, null, null);
                evtt.target = tar;
                evtt.eventPhase = /*Event.AT_TARGET*/ 2;
                var tce = tar._capter; //tceは登録しておいたリスナーのリスト
                for (var j=0,tcli=tce.length;j<tcli;++j){
                  if (tce[j]) {
                    tce[j].handleEvent(evtt);
                  }
                }
              }
            }
          }
          evtt = null;
        }
        tar = null;
      }
      evt = null;
    }, false);
    evt = null;
  }, false);
  return this;
};
SVGSVGElement.constructor = SVGElement;
SVGSVGElement.prototype = new SVGElement();
/*void*/          SVGSVGElement.prototype.forceRedraw = function() {
};
/*float*/         SVGSVGElement.prototype.getCurrentTime = function(){
  return (this._currentTime);
};
/*void*/          SVGSVGElement.prototype.setCurrentTime = function(/*float*/ seconds ){
  this._currentTime = seconds;
};
/*SVGNumber*/     SVGSVGElement.prototype.createSVGNumber = function(){
  var s = new SVGNumber();
  s.value = 0;
  return s;
};
/*SVGAngle*/     SVGSVGElement.prototype.createSVGAngle = function(){
  var s = new SVGAngle();
  s.value = 0;
  s.unitType = 1;
  return s;
};
/*SVGLength*/     SVGSVGElement.prototype.createSVGLength = function(){
  var s = new SVGLength();
  s.unitType = /*SVG_LENGTHTYPE_NUMBER*/ 1;
  return s;
};
/*SVGPoint*/      SVGSVGElement.prototype.createSVGPoint = function(){
  return new SVGPoint();
};
/*SVGMatrix*/     SVGSVGElement.prototype.createSVGMatrix = function(){
  //単位行列を作成
  return new SVGMatrix();
};
/*SVGRect*/       SVGSVGElement.prototype.createSVGRect = function(){
  return new SVGRect();
};
/*SVGTransform*/  SVGSVGElement.prototype.createSVGTransform = function(){
  var s = this.createSVGTransformFromMatrix(this.createSVGMatrix());
  return s;
};
/*SVGTransform*/  SVGSVGElement.prototype.createSVGTransformFromMatrix = function(/*SVGMatrix*/ matrix ){
  var s = new SVGTransform();
  s.setMatrix(matrix);
  return s;
};
/*getScreenCTM
 *SVGElement(SVGLocatable)で指定しておいたメソッドであるが、ここで、算出方法が違うため、再定義をする
 */
/*SVGMatrix*/ SVGSVGElement.prototype.getScreenCTM = function(){
  if (!!this._cacheScreenCTM) { //キャッシュがあれば
    return (this._cacheScreenCTM);
  }
  var vw = this.viewport.width,
      vh = this.viewport.height,
      vB, par, m, vbx, vby, vbw, vbh, rw, rh, xr, yr, tx, ty, ttps;
  if (!this.useCurrentView) {
    vB = this.viewBox.baseVal;
    par = this.preserveAspectRatio.baseVal;    
  } else {
    vB = this.currentView.viewBox.baseVal;
    par = this.currentView.preserveAspectRatio.baseVal;
  }
  if (!!!vB._isUsed) { //viewBox属性が指定されていなければ
    this._tx = this._ty = 0;
    m = this.createSVGMatrix();
    this._cacheScreenCTM = m; //キャッシュを作っておく
    return m;
  } else {
    vbx = vB.x;
    vby = vB.y;
    vbw = vB.width;
    vbh = vB.height;
    rw = vw / vbw;
    rh = vh / vbh;
    xr = 1;
    yr = 1;
    tx = 0;
    ty = 0;
    if (par.align === 1) { //none
      xr = rw;
      yr = rh;
      tx = -vbx * xr;
      ty = -vby * yr;
    } else {
      var ax = (par.align + 1) % 3 + 1;
      var ay = Math.round(par.align / 3);
      switch (par.meetOrSlice) {
        case 1: //meet
          xr = yr = Math.min(rw, rh);
        break;
        case 2: //slice
          xr = yr = Math.max(rw, rh);
        break;
      }
      tx = -vbx * xr;
      ty = -vby * yr;
      switch (ax) {
        case 1: //xMin
        break;
        case 2: //xMid
          tx += (vw - vbw * xr) / 2;
        break;
        case 3: //xMax
          tx += vw - vbw * xr;
        break;
      }
      switch (ay) {
        case 1: //YMin
        break;
        case 2: //YMid
          ty += (vh - vbh * yr) / 2;
        break;
        case 3: //YMax
          ty += vh - vbh * yr;
        break;
      }
    }
  }
  //text要素の位置調整に使うため、ここで、viewの移動量を記録しておく
  this._tx = tx;
  this._ty = ty;
  ttps =  this._tar.style;
  ttps.marginLeft = tx+ "px";
  ttps.marginTop = ty+ "px";
  m = this.createSVGMatrix();
  m.a = xr;
  m.d = yr;
  this._cacheScreenCTM = m; //キャッシュを作っておく
  vw = vh = vB = par = vbx = vby = vbw = vbh = rw = rh = xr = yr = tx = ty = ttps = null;
  return m;
};

  /*interface SVGZoomAndPan*/
  // Zoom and Pan Types
SVGZoomAndPan = {
  /*const unsigned short*/ SVG_ZOOMANDPAN_UNKNOWN : 0,
  /*const unsigned short*/ SVG_ZOOMANDPAN_DISABLE : 1,
  /*const unsigned short*/ SVG_ZOOMANDPAN_MAGNIFY : 2
};

function SVGFitToViewBox() {
  /*readonly SVGAnimatedRect*/ this.viewBox = new SVGAnimatedRect();
  /*readonly SVGAnimatedPreserveAspectRatio*/ this.preserveAspectRatio = new SVGAnimatedPreserveAspectRatio();
  return this;
};
function SVGViewSpec(ele) {
  SVGFitToViewBox.apply(this, arguments);
  /*readonly SVGTransformList*/ this.transform = new SVGTransformList();
  /*readonly SVGElement*/       this.viewTarget = ele;
  /*readonly DOMString*/        this.viewBoxString = "";
  /*readonly DOMString*/        this.preserveAspectRatioString = "";
  /*readonly DOMString*/        this.transformString = "";
  /*readonly DOMString*/        this.viewTargetString = "";
  return this;
};
SVGViewSpec.constructor = SVGFitToViewBox;
SVGViewSpec.prototype = new SVGFitToViewBox();

function SVGGElement(_doc) {
  SVGElement.apply(this);
  this._tar = _doc.createElement("v:group");
  _doc = null;
  /*以下の処理は、この子要素ノードがDOMツリーに追加されて初めて、
   *描画が開始されることを示す。つまり、appendChildで挿入されない限り、描画をしない。
   */
  this.addEventListener("DOMNodeInserted", function(evt){
    var tar = evt.target;
    if (evt.eventPhase === /*Event.BUBBLING_PHASE*/ 3) {
      return; //強制終了させる
    }
    var tnext = tar.nextSibling,
        tpar = tar.parentNode,
        isLast = true;
    if (tnext && tnext._tar && tpar._tar && (tnext._tar.parentNode === tpar._tar)) {
      tpar._tar.insertBefore(tar._tar, tnext._tar);
    } else if (tnext && !tnext._tar && tpar._tar) {
      /*以下の処理は、_tarプロパティがない要素オブジェクトがあるため、それに対処するもの
       *use要素や実体参照などは_tarプロパティがないことに注意
       */
      while (tnext) {
        if (tnext._tar && (tnext._tar.parentNode === tpar._tar)) {
          tpar._tar.insertBefore(tar._tar, tnext._tar);
          isLast = false;
        } 
        tnext = tnext.nextSibling;
      }
      if (isLast) {
        tpar._tar.appendChild(tar._tar);
      }
    } else if (!tnext && tpar._tar) {
      tpar._tar.appendChild(tar._tar);      
    }
    tnext = tpar = isLast = evt = tar = null;
  }, false);
  return this;
};
SVGGElement.constructor = SVGElement;
SVGGElement.prototype = new SVGElement();

function SVGDefsElement() {
  SVGElement.apply(this, arguments);
  this.style.setProperty("display", "none");
  return this;
};
SVGDefsElement.constructor = SVGElement;
SVGDefsElement.prototype = new SVGElement();

function SVGDescElement() {
  SVGElement.apply(this, arguments);
  return this;
}
SVGDescElement.constructor = SVGElement;
SVGDescElement.prototype = new SVGElement();

function SVGTitleElement() {
  SVGElement.apply(this, arguments);
  this.addEventListener("DOMCharacterDataModified", function(evt){
    evt.target.ownerDocument.title = evt.target.firstChild.nodeValue;
  }, false);
  return this;
}
SVGTitleElement.constructor = SVGElement;
SVGTitleElement.prototype = new SVGElement();

function SVGSymbolElement() {
  SVGElement.apply(this, arguments);
  SVGURIReference.apply(this);
  return this;
}
SVGDefsElement.constructor = SVGElement;
SVGDefsElement.prototype = new SVGElement();

function SVGUseElement() {
  SVGGElement.apply(this, arguments);
  /*readonly SVGAnimatedLength*/   this.x = new SVGAnimatedLength();           //use要素のx属性に対応（以下、同様）
  /*readonly SVGAnimatedLength*/   this.y = new SVGAnimatedLength();
  /*readonly SVGAnimatedLength*/   this.width = new SVGAnimatedLength();
  /*readonly SVGAnimatedLength*/   this.height = new SVGAnimatedLength();
  /*readonly SVGElementInstance*/ this.instanceRoot = new SVGElementInstance(); //参照先インスタンスのルート
  /*readonly SVGElementInstance*/ this.animatedInstanceRoot = new SVGElementInstance();//アニメの最中のインスタンス。静止中は通常
  this.addEventListener("DOMNodeInserted", function(evt){
    if (evt.eventPhase === /*Event.BUBBLING_PHASE*/ 3) {
      return; //強制終了させる
    }
    evt.target.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:show", "embed");
  }, false);
  this.addEventListener("S_Load", function(evt){
    var tar = evt.target,
        style = tar.ownerDocument.defaultView.getComputedStyle(tar, ""),
        fontSize = parseFloat(style.getPropertyValue("font-size")),
        tgtb = tar.transform.baseVal,
        trans = tar.ownerDocument.documentElement.createSVGTransform();
    tar.x.baseVal._emToUnit(fontSize);
    tar.y.baseVal._emToUnit(fontSize);
    tar.width.baseVal._emToUnit(fontSize);
    tar.height.baseVal._emToUnit(fontSize);
    tar.instanceRoot = tar.animatedInstanceRoot = tar.ownerDocument.importNode(tar._instance, true);
    trans.setTranslate(tar.x.baseVal.value, tar.y.baseVal.value);
    tgtb.appendItem(trans);
    tar.appendChild(tar.instanceRoot);
    evt = trans = tar = evtt = tgtb = style = fontSize = null;
  }, false);
  SVGURIReference.apply(this);
  return this;
};
SVGUseElement.constructor = SVGElement;
SVGUseElement.prototype = new SVGElement();

function SVGElementInstance() {
  /*EventTargetの代用として
   *Nodeオブジェクトを継承させる
   */
  Node.apply(this, arguments);
  /*readonly SVGElement*/ this.correspondingElement;       //use要素で使われる参照先の要素
  /*readonly SVGUseElement*/ this.correspondingUseElement; //参照先の要素にuse要素が含まれているとき、ここにuse要素を収納
  /*readonly SVGElementInstance*/ this.parentNode;
  /*readonly SVGElementInstanceList*/ this.childNodes;
  /*readonly SVGElementInstance*/ this.firstChild;
  /*readonly SVGElementInstance*/ this.lastChild;
  /*readonly SVGElementInstance*/ this.previousSibling;
  /*readonly SVGElementInstance*/ this.nextSibling;
  return this;
};
SVGElementInstance.prototype = new Node();
/*SVGElementInstanceList
 */
function SVGElementInstanceList() { 
  /*readonly unsigned long*/ this.length = 0;
  return this;
};
/*SVGElementInstance*/ SVGElementInstanceList.prototype.item = function(/*unsigned long*/ index ) {
  return (this[index]);
}
function SVGImageElement(_doc) {
  SVGElement.apply(this, arguments);
  this._tar = _doc.createElement("v:image");
  _doc = null;
  //以下は、与えられた属性の値に対応する
  /*readonly SVGAnimatedLength*/ this.x = new SVGAnimatedLength();
  /*readonly SVGAnimatedLength*/ this.y = new SVGAnimatedLength();
  /*readonly SVGAnimatedLength*/ this.width = new SVGAnimatedLength();
  /*readonly SVGAnimatedLength*/ this.height = new SVGAnimatedLength();
  /*readonly SVGAnimatedPreserveAspectRatio*/ this.preserveAspectRatio = new SVGAnimatedPreserveAspectRatio();
  this.addEventListener("DOMNodeInserted", function(evt){
    if (evt.eventPhase === /*Event.BUBBLING_PHASE*/ 3) {
      return; //強制終了させる
    }
    var tar = evt.target;
    tar.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:show", "embed");
    if (tar.nextSibling) {
      if (!!tar.parentNode._tar && !!tar.nextSibling._tar) {
        tar.parentNode._tar.insertBefore(tar._tar, tar.nextSibling._tar);
      }
    } else if (!!tar.parentNode._tar){
      tar.parentNode._tar.appendChild(tar._tar);
    }
    tar.addEventListener("DOMNodeInsertedIntoDocument", function(evt) {
      var tar = evt.target,
          style = tar.ownerDocument.defaultView.getComputedStyle(tar, ""),
          fontSize = parseFloat(style.getPropertyValue("font-size")),
          ts = tar._tar.style,
          ctm = tar.getScreenCTM(),
          po = tar.ownerDocument.documentElement.createSVGPoint(),
          fillOpacity = parseFloat(style.getPropertyValue("fill-opacity")),
          ttfia;
      tar.x.baseVal._emToUnit(fontSize);
      tar.y.baseVal._emToUnit(fontSize);
      tar.width.baseVal._emToUnit(fontSize);
      tar.height.baseVal._emToUnit(fontSize);
      ts.position = "absolute";
      po.x = tar.x.baseVal.value;
      po.y = tar.y.baseVal.value;
      po = po.matrixTransform(ctm);
      ts.left = po.x + "px";
      ts.top = po.y + "px";
      ts.width = tar.width.baseVal.value * ctm.a + "px";
      ts.height = tar.height.baseVal.value * ctm.d + "px";
      if (fillOpacity !== 1) {
        ts.filter = "progid:DXImageTransform.Microsoft.Alpha";
        ttfia = tar._tar.filters.item('DXImageTransform.Microsoft.Alpha');
        ttfia.Style = 0;
        ttfia.Opacity = fillOpacity * 100;
        ttfia = null;
      }
      evt = tar = style = fontSize = ts = ctm = po = fillOpacity = null;
    }, false);
    evt = tar = null;
  }, false);
  SVGURIReference.apply(this);
  return this;
};
SVGImageElement.constructor = SVGElement;
SVGImageElement.prototype = new SVGElement();

function SVGSwitchElement() {
  SVGElement.apply(this, arguments);
  return this;
};
SVGSwitchElement.constructor = SVGElement;
SVGSwitchElement.prototype = new SVGElement();

//bookmarkletから呼び出されたらtrue
var sieb_s;
function GetSVGDocument(ele) {
  this._tar = ele;
  this._next = null;
  return this;
}
function _ca_() {
  if ((NAIBU._that.xmlhttp.readyState === 4)  &&  (NAIBU._that.xmlhttp.status === 200)) {
    NAIBU._that._ca();
  }
};
 GetSVGDocument.prototype = {
  /*_initメソッド
   *object(embed)要素で指定されたSVG文書を読み込んで、SVGを処理して表示させるメソッド
   */
  _init : function() {
    /*objeiはobject要素かembed要素*/
    var xmlhttp = NAIBU.xmlhttp,
        objei = this._tar,
        data;
    if (this._tar.nodeName === "OBJECT") {
      data = "data";
    } else {
      data = "src";
    }
    xmlhttp.open("GET", objei.getAttribute(data), true);
    objei.style.display = "none";
    xmlhttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    this.xmlhttp = xmlhttp;
    /*クロージャを利用しないことで、軽量化を計る*/
    NAIBU._that = this;
    xmlhttp.onreadystatechange = _ca_;
    xmlhttp.send(null);
    xmlhttp = objei = data = null;
  },
  /*コール関数。全処理を担う*/
  _ca : function() {
    /*responseXMLを使うと、時々、空のデータを返すことがあるため（原因は不明）、
     *ここでは、responseTextを用いる
     */
    var ifr = this._tar.previousSibling,
        ifcw = ifr.contentWindow,
        _doc;
    if (ifcw) {
      ifr.contentWindow.screen.updateInterval = 999;
      _doc = ifr.contentWindow.document;
      _doc.write("");
      _doc.close(); // これがないと document.body は null になる
    } else {        //インラインSVGの場合
      _doc = document;
    }
    if (("namespaces" in _doc) && !_doc.namespaces["v"]) {
      _doc.namespaces.add("v","urn:schemas-microsoft-com:vml");
      _doc.namespaces.add("o","urn:schemas-microsoft-com:office:office");
      var st = _doc.createStyleSheet(),
          vmlUrl = "behavior: url(#default#VML);display: inline-block;} "; //inline-blockはIEのバグ対策
      st.cssText = "v\\:rect{" +vmlUrl+ "v\\:image{" +vmlUrl+ "v\\:fill{" +vmlUrl+ "v\\:stroke{" +vmlUrl+ "o\\:opacity2{" +vmlUrl
        + "dn\\:defs{display:none}"
        + "v\\:group{text-indent:0px;position:relative;width:100%;height:100%;" +vmlUrl
        + "v\\:shape{width:100%;height:100%;" +vmlUrl;
      st = vmlUrl = null;
    }
    DOMImplementation._doc_ = _doc; //_doc_プロパティはcreateDocumentメソッドで使う
    var str = this.xmlhttp.responseText,
        objei = this._tar,
        s = DOMImplementation.createDocument("http://www.w3.org/2000/svg", "svg"),
        tar = s.documentElement,
        tview = tar.viewport,
        objw, objh, fi, n, attr, att, w, h,
        sdt = tar._tar,
        sp = _doc.createElement("div"),
        dcp = _doc.createElement("v:group"),
        backr = _doc.createElement("v:rect"),
        style, fontSize, sw, sh, trstyle, tpstyle, backrs, viewWidth, viewHeight, backdown, backright,
        bfl, bft, bl, text,
        _parseFloat = parseFloat,
        ndoc = NAIBU.doc,
    　　　　　　oba = _doc.createElement("div"); //obaはradialGradient要素で使う
    oba.setAttribute("id","_NAIBU_outline");
    _doc.body.appendChild(oba);
    sp.style.margin = "-1px,0px,0px,-1px"
    if (ifcw) {
       _doc.body.style.backgroundColor = objei.parentNode.currentStyle.backgroundColor;
    }
    ndoc.async = false;
    /*下記のプロパティについては、Microsoftのサイトを参照
     *ResolveExternals Property [Second-level DOM]
     * http://msdn.microsoft.com/en-us/library/ms761375%28VS.85%29.aspx
     *ValidateOnParse Property [Second-level DOM]
     * http://msdn.microsoft.com/en-us/library/ms760286%28VS.85%29.asp
     */
    ndoc.validateOnParse = false;
    ndoc.resolveExternals = false;
    ndoc.preserveWhiteSpace = true;
    ndoc.loadXML(str);
    /*IE6-8のみで使えるupdateIntervalは、
     *描画間隔の調整が可能。デフォルトは0。
     *スクロール時にバグが起きるので、0に戻してやる必要がある。
     */
    screen.updateInterval = 999;
    if (/&[^;]+;/.test(str)) {
      /*以下の処理は、実体参照を使ったとき
       *代替の処理を用いて、実体参照を処理するもの
       */
      var tmp = str;
      var enti = (ndoc.doctype)? ndoc.doctype.entities: { length:0 };
      for (var i=0; i<enti.length; i++) {
      var map = enti.item(i);
      var regex = new RegExp("&"+map.nodeName+";", "g");
      tmp = tmp.replace(regex, map.firstChild.xml);
      }
      ndoc.loadXML(tmp);
      tmp = null;
    }
    tview.top = 0;
    tview.left = 0;
    tview.width = objei.clientWidth;
    tview.height = objei.clientHeight;
    if (tview.height < 24) { //IEの標準モードではclientHeightプロパティの値が小さくなることがある
      tview.height = screen.availHeight;
    }
    if (tar.viewport.height < 24) { //IEの標準モードではclientHeightプロパティの値が小さくなることがある
      tar.viewport.height = screen.width;
    }
    objw = objei.getAttribute("width");
    objh = objei.getAttribute("height");
    if (objw) {
      tar.setAttributeNS(null, "width", objw);
    }
    if (objh) {
      tar.setAttributeNS(null, "height", objh);
    }
    fi = ndoc.documentElement.firstChild;
    attr = ndoc.documentElement.attributes;
    /*ルート要素のNamedNodeMapを検索する*/
    for (var i=0,atli=attr.length;i<atli;++i) {
      att = s.importNode(attr[i], false);
      tar.setAttributeNodeNS(att);
    }
    str = attr = null;
    dcp.style.width = tview.width+ "px";
    dcp.style.height = tview.height+ "px";
    dcp.coordsize = tview.width+ " " +tview.height;
    sp.appendChild(dcp);
    if (ifcw) {
      _doc.body.appendChild(sp);
    } else {
      this._tar.parentNode.insertBefore(sp, this._tar);
    }
    dcp.appendChild(sdt);
    while (fi) { //子ノードを検索して、子供がいれば、importNodeメソッドを再帰的に実行する
      n = s.importNode(fi, true);
      tar.appendChild(n);
      fi = fi.nextSibling;
    }
    fi = null;
    /*dom/event.jsのaddEventListenerメソッドなどで、iframe要素のwindowオブジェクトを利用する必要があるため、
     *ドキュメントにそのオブジェクトを結び付けておく
     */
    s._window = ifcw;
    /*以下では、VMLの要素とHTMLのCSSのプロパティを用いて、背景を
     *作り出す作業を行う。これは必須
     */
    style = tar.ownerDocument.defaultView.getComputedStyle(tar, "");
    fontSize = _parseFloat(style.getPropertyValue("font-size"));
    tar.x.baseVal._emToUnit(fontSize);
    tar.y.baseVal._emToUnit(fontSize);
    tar.width.baseVal._emToUnit(fontSize);
    tar.height.baseVal._emToUnit(fontSize);
    sw = tar.width.baseVal.value;
    sh = tar.height.baseVal.value;
    backr.style.position = "absolute";
    w = tview.width;
    h = tview.height;
    backr.style.width = w+ "px";
    backr.style.height = h+ "px";
    backr.style.zIndex = -1;
    backr.stroked = "false";
    backr.filled = "false";
    tar._tar.appendChild(backr);
    trstyle = tar._tar.style;
    tpstyle = objei.style;
    trstyle.visibility = "visible";
    trstyle.position = "absolute";
    /*以下、画像を切り取り*/
    trstyle.overflow = "hidden";
    /*ウィンドウ枠の長さを決定する*/
    viewWidth = w > sw ? sw : w;
    viewHeight = h > sh ? sh : h;
    backrs = backr.currentStyle;
    bfl = _parseFloat(backrs.left);
    bft = _parseFloat(backrs.top);
    bl = -tar._tx;                  //blやbtは、ずれを調整するのに使う
    bt = -tar._ty;
    if (bfl !== 0 && !isNaN(bfl)) { //内部の図形にずれが生じたとき(isNaNはIE8でautoがデフォルト値のため）
      bl = bfl;
      dcp.style.left = -bl+ "px";
    }
    if (bft !== 0 && !isNaN(bfl)) {
      bt = bft;
      dcp.style.top = -bt+ "px";
    }
    backright = bl + viewWidth + 1;
    backdown = bt + viewHeight + 1;
    trstyle.clip = "rect(" +bt+ "px " +backright+ "px " +backdown+ "px " +bl+ "px)";    this._document = s;
    if ("_svgload_limited" in s.documentElement) {
      /*_svgload_limitedプロパティはXlink言語が使われていない限り、0である。
       *xlink:href属性が指定されるたびに+1となる。
       *0以外は、SVGLoadイベントが発火されない仕組みとなっている
       *
       *目的:
       * Xlinkのリンク先のソースを読み込むまで、SVGLoadイベントを発火させないため
       */
      s.documentElement._svgload_limited--;
      if (s.documentElement._svgload_limited < 0) {
        var evt = s.createEvent("SVGEvents");
        evt.initEvent("SVGLoad", false, false);
        s.documentElement.dispatchEvent(evt);
      }
    }
    //以下、テキストの位置を修正
    text = s.documentElement._tar.getElementsByTagName("div");
    for (var i=0, texti;text[i];++i) {
      texti = text[i];
      if (texti.firstChild.nodeName !== "shape") { //radialGradient用のdiv要素でないならば
        var tis = texti.style;
        tis.left = _parseFloat(tis.left) + bl + "px";
        tis.top = _parseFloat(tis.top) + bt + "px";
        tis = null;
      }
    }
    s.defaultView._cache = s.defaultView._cache_ele = null;
    oba = _doc = evt = _doc = objei = tar = tview = objw = objh = n = att = sdt = sp = dcp = backr = sw = sh = style = fontSize = null;
    trstyle = tpstyle = backrs = text = texti = i = bfl = bft = bl = bt = text = _parseFloat = w = h = viewWidth = viewHeight = backdown = backright = null;
    /*IEのメモリリーク対策として、空関数を入力*/
    this.xmlhttp.onreadystatechange = NAIBU.emptyFunction;
    if (this._next) {
      ifcw && (ifr.contentWindow.screen.updateInterval = 0);
      ifr = ifcw = s = null;
      this._next._init();
    } else {
      /*全要素の読み込みが終了した場合*/
      if (s.implementation._buffer_) {
        screen.updateInterval = 0;
        /*以下はバッファリングにためておいた要素とイベントを、後から実行する*/
        NAIBU._buff_num = 0;
        NAIBU._buff = setInterval(function(){
          var n = NAIBU._buff_num,
              dbuf = DOMImplementation._buffer_,
              dbufli = dbuf.length,
              s, evt;
          if (dbufli === 0) {
            clearInterval(NAIBU._buff);              
          } else {
            for (var i=0;i<50;++i) {
              s = dbuf[n];
              evt = dbuf[n+1];
              s.dispatchEvent(evt);
              n += 2;
              s = evt = null;
              if (n >= dbufli) {
                clearInterval(NAIBU._buff);
                DOMImplementation._buffer_ = null;
                NAIBU.Time.start();
                dbuf = n = dbufli = null;
                return;
              }
            }
            NAIBU._buff_num = n;
          }
          dbuf = n = dbufli = null;
        }, 1);
        ifr = ifcw = s = null;
      } else {
        ifr = ifcw = s = null;
        NAIBU.Time.start();
      }
      delete NAIBU.doc;
    }
  },
  /*SVGDocument*/  getSVGDocument : function() {
    return (this._document);
  }
};
/*空関数（IEのメモリリーク対策)*/
NAIBU.emptyFunction = function() {};

/*SVGStyleElement
 *style要素をあらわすオブジェクト
 */
function SVGStyleElement(_doc) {
  SVGElement.apply(this);
  LinkStyle.apply(this);
  /*LinkStyleに関しては、以下の仕様を参照のこと。なお、これはSVG DOMでは継承されていないので要注意。
   *CSS2 1. Document Object Model Style Sheets
   * 1.3. Document Extensions
   *   Interface LinkStyle (introduced in DOM Level 2)
   * http://www.w3.org/TR/DOM-Level-2-Style/stylesheets.html#StyleSheets-LinkStyle
   */
  /*以下はそれぞれ、属性の値に対応している*/
  /*DOMString*/ this.xmlspace;
  /*DOMString*/ this.type = "text/css";
  /*DOMString*/ this.media;
  /*DOMString*/ this.title;
  SVGURIReference.apply(this);
  this.addEventListener("DOMAttrModified", function(evt){
    if (evt.attrName === "type") {
      evt.target.type = evt.newValue;
    } else if (evt.attrName === "title") {
      evt.target.title = evt.newValue;
    }
    evt = null;
  }, false);
  this.addEventListener("S_Load", function(evt){
    var tar = evt.target,
        sheet = tar.sheet,
        styleText = tar._text,
        tod = tar.ownerDocument,
        style = _doc.createElement("style"),
        ri, rsc, scri, rsi;
    NAIBU._temp_doc = tod;
    sheet = tod.styleSheets[tod.styleSheets.length] = DOMImplementation.createCSSStyleSheet(tar.title, tar.media);
    sheet.ownerNode = tar;
    /*以下は、IEのCSSパーサを使って、スタイルシートのルールを実装していく*/
    _doc.documentElement.firstChild.appendChild(style);
    style.styleSheet.cssText = styleText;
    for (var i=0, rules=style.styleSheet.rules, rli=rules.length;i<rli;++i) {
      ri = rules[i];
      scri = new CSSStyleRule();
      scri.selectorText = ri.selectorText;
      scri.style.cssText = ri.style.cssText;
      rsc = scri.style.cssText.split(";");
      for (var j=0, rsli=rsc.length;j<rsli;++j) {
        rsi = rsc[j].split(": ");
        scri.style.setProperty(rsi[0], rsi[1]);
      }
      sheet.cssRules[sheet.cssRules.length] = scri;
    }
    tod.documentElement.addEventListener("DOMNodeInsertedIntoDocument", function(evt) {
      var tar = evt.target,
          doc = tar.ownerDocument,
          rules = doc.styleSheets[0] ? doc.styleSheets[0].cssRules : [],
          selector, ru, tcb = tar.className.baseVal || ".,.";
      for (var i=0, rli=rules.length;i<rli;++i) {
        selector = rules[i].selectorText;
        /*_rulesプロパティはCSSモジュールのgetCoumputedStyleメソッドで使う*/
        ru = tar._rules || [];
        if ((selector.indexOf("." +tcb) > -1) || (selector.indexOf("#" +tar.id) > -1)
            || (tar.nodeName === selector)) {
          ru[ru.length] = rules[i];
        }
        tar._rules = ru;
      }
      tar = doc = rules = null;
    }, true);
    tar = evt = style = sheet = styleText = tod = i = rules = rli = null;
  }, false);
  this.addEventListener("DOMNodeInserted", function(evt){
    var tar = evt.target;
    if (evt.eventPhase === /*Event.BUBBLING_PHASE*/ 3) {
      if (tar.nodeName === "#cdata-section") {
        evt.currentTarget._text = tar.data;
      }
      return;
    }
    tar.addEventListener("DOMNodeInsertedIntoDocument", function(evt){
      var tar = evt.target;
      if ((evt.eventPhase === Event.AT_TARGET) && !tar.getAttributeNodeNS("http://www.w3.org/1999/xlink", "xlink:href")) {
        var evtt = tar.ownerDocument.createEvent("SVGEvents");
        evtt.initEvent("S_Load", false, false);
        evt.currentTarget.dispatchEvent(evtt);
      }
      tar = evt = null;
    }, false);
  }, false);
  return this;
};
SVGStyleElement.constructor = SVGElement;
SVGStyleElement.prototype = new SVGElement();

/*SVGPoint
 *2次元座標の点（x,y)を表すオブジェクト
 */
function SVGPoint() { 
  return this;
};
/*float*/SVGPoint.prototype.x = SVGPoint.prototype.y = 0;
SVGPoint.prototype.matrixTransform = function(/*SVGMatrix*/ matrix ) {
  /*整数にしているのは、VMLの設計上、小数点を扱えないときがあるため*/
  var x = parseInt(matrix.a * this.x + matrix.c * this.y + matrix.e);
  var y = parseInt(matrix.b * this.x + matrix.d * this.y + matrix.f);
  if ((-1 < x) && (x < 1)) {x=1;}
  if ((-1 < y) && (y < 1)) {y=1;}
  var s = new SVGPoint();
  s.x = x;
  s.y = y;
  return s;
};

function SVGPointList() { 
  return this;
};
for (var prop in SVGStringList.prototype) { //prototypeのコピーで継承を行う
  SVGPointList.prototype[prop] = SVGStringList.prototype[prop];
}

/*SVGMatrix
 *行列をあらわすオブジェクト。写像に用いる。以下のように表現できる
 *[a c e]
 *[b d f]
 *[0 0 1]
 */
function SVGMatrix() { 
  return this;
};
SVGMatrix.prototype = {
  /*float*/ a : 1,
  /*float*/ b : 0,
  /*float*/ c : 0,
  /*float*/ d : 1,
  /*float*/ e : 0,
  /*float*/ f : 0,
  /*multiplyメソッド
   *行列の積を求めて返す
   */
  /*SVGMatrix*/ multiply : function(/*SVGMatrix*/ secondMatrix ) {
    var s = new SVGMatrix(), m = secondMatrix;
    if (!isFinite(m.a) || !isFinite(m.b) || !isFinite(m.c) || !isFinite(m.d) || !isFinite(m.e) || !isFinite(m.f)) {
      throw (new Error("引数の値がNumber型ではありません"));
    }
    s.a = this.a * m.a + this.c * m.b;
    s.b = this.b * m.a + this.d * m.b;
    s.c = this.a * m.c + this.c * m.d;
    s.d = this.b * m.c + this.d * m.d;
    s.e = this.a * m.e + this.c * m.f + this.e;
    s.f = this.b * m.e + this.d * m.f + this.f;
    m = secondMatrix = null;
    return s;
  },
  /*inverseメソッド
   *逆行列を返す
   */
  /*SVGMatrix*/ inverse : function() {
    var s = new SVGMatrix(), n = this._determinant();
    if (n !== 0) {
      s.a = this.d / n;
      s.b = -this.b / n;
      s.c = -this.c / n;
      s.d = this.a / n;
      s.e = (this.c * this.f - this.d * this.e) / n;
      s.f = (this.b * this.e - this.a * this.f) / n;
      return s;
    } else {
      throw (new SVGException(SVGException.SVG_MATRIX_NOT_INVERTABLE));
    }
  },
  /*SVGMatrix*/ translate : function(/*float*/ x, /*float*/ y ) {
    var m = new SVGMatrix();
    m.e = x;
    m.f = y;
    var s =  this.multiply(m);
    m = null;
    return s;
  },
  /*SVGMatrix*/ scale : function(/*float*/ scaleFactor ) {
    var m = new SVGMatrix();
    m.a = scaleFactor;
    m.d = scaleFactor;
    var s =  this.multiply(m);
    m = null;
    return s;
  },
  /*SVGMatrix*/ scaleNonUniform : function(/*float*/ scaleFactorX, /*float*/ scaleFactorY ) {
    var m = new SVGMatrix();
    m.a = scaleFactorX;
    m.d = scaleFactorY;
    var s =  this.multiply(m);
    m = null;
    return s;
  },
  /*SVGMatrix*/ rotate : function(/*float*/ angle ) {
    var m = new SVGMatrix(), rad = angle / 180 * Math.PI; //ラジアン変換
    m.a = Math.cos(rad);
    m.b = Math.sin(rad);
    m.c = -m.b;
    m.d = m.a;
    var s =  this.multiply(m);
    m = rad = null;
    return s;
  },
  //座標(x, y)と原点の角度の分だけ、回転する
  /*SVGMatrix*/ rotateFromVector : function(/*float*/ x, /*float*/ y ) {
    if ((x === 0) || (y === 0) || !isFinite(x) || !isFinite(y)) {
      throw (new SVGException(SVGException.SVG_INVALID_VALUE_ERR))
    }
    var m = new SVGMatrix(), rad = Math.atan2(y, x);
    m.a = Math.cos(rad);
    m.b = Math.sin(rad);
    m.c = -m.b;
    m.d = m.a;
    var s =  this.multiply(m);
    m = rad = null;
    return s;
  },
  /*SVGMatrix*/ flipX : function() {
    var m = new SVGMatrix();
    m.a = -m.a;
    var s =  this.multiply(m);
    m = null;
    return s;
  },
  /*SVGMatrix*/ flipY : function() {
    var m = new SVGMatrix();
    m.d = -m.d;
    var s =  this.multiply(m);
    m = null;
    return s;
  },
  /*SVGMatrix*/ skewX : function(/*float*/ angle ){
    var m = new SVGMatrix(), rad = angle / 180 * Math.PI; //ラジアン変換
    m.c = Math.tan(rad);
    var s =  this.multiply(m);
    m = null;
    return s;
  },
  /*SVGMatrix*/ skewY : function(/*float*/ angle ){
    var m = new SVGMatrix(), rad = angle / 180 * Math.PI;
    m.b = Math.tan(rad);
    var s =  this.multiply(m);
    m = null;
    return s;
  },
  //行列式
  /*float*/ _determinant : function() {
    return (this.a * this.d - this.b * this.c);
  }
};

function SVGTransform() { 
  /*readonly SVGMatrix*/ this.matrix = new SVGMatrix();
  return this;
};
    // Transform Types
  /*unsigned short*/ SVGTransform.SVG_TRANSFORM_UNKNOWN   = 0;
  /*unsigned short*/ SVGTransform.SVG_TRANSFORM_MATRIX    = 1;
  /*unsigned short*/ SVGTransform.SVG_TRANSFORM_TRANSLATE = 2;
  /*unsigned short*/ SVGTransform.SVG_TRANSFORM_SCALE     = 3;
  /*unsigned short*/ SVGTransform.SVG_TRANSFORM_ROTATE    = 4;
  /*unsigned short*/ SVGTransform.SVG_TRANSFORM_SKEWX     = 5;
  /*unsigned short*/ SVGTransform.SVG_TRANSFORM_SKEWY     = 6;
SVGTransform.prototype = {
  /*ダミーの単位行列。各メソッドで使う*/
  _matrix : (new SVGMatrix()),
  /*readonly unsigned short*/ type : SVGTransform.SVG_TRANSFORM_UNKNOWN,
  /*readonly float*/ angle : 0,
  /*void*/ setMatrix : function(/*SVGMatrix*/ matrix ) {
    this.type = /*SVGTransform.SVG_TRANSFORM_MATRIX*/ 1;
    this.matrix = this._matrix.multiply(matrix);
  },
  /*void*/ setTranslate : function(/*float*/ tx, /*float*/ ty ) {
    this.type = /*SVGTransform.SVG_TRANSFORM_TRANSLATE*/ 2;
    this.matrix = this._matrix.translate(tx, ty);
  },
  /*void*/ setScale : function(/*float*/ sx, /*float*/ sy ) {
    this.type = /*SVGTransform.SVG_TRANSFORM_SCALE*/ 3;
    this.matrix = this._matrix.scaleNonUniform(sx, sy);
  },
  /*void*/ setRotate : function(/*float*/ angle, /*float*/ cx, /*float*/ cy ) {
    this.angle = angle;
    this.type = /*SVGTransform.SVG_TRANSFORM_ROTATE*/ 4;
    this.matrix = this._matrix.rotate(angle);
    this.matrix.e = (1-this.matrix.a)*cx - this.matrix.c*cy;
    this.matrix.f = -this.matrix.b*cx + (1-this.matrix.d)*cy;
  },
  /*void*/ setSkewX : function(/*float*/ angle ) {
    this.angle = angle;
    this.type = /*SVGTransform.SVG_TRANSFORM_SKEWX*/ 5;
    this.matrix = this._matrix.skewX(angle);
  },
  /*void*/ setSkewY : function(/*float*/ angle ) {
    this.angle = angle;
    this.type = /*SVGTransform.SVG_TRANSFORM_SKEWY*/ 6;
    this.matrix = this._matrix.skewY(angle);
  }
};

function SVGTransformList() { 
  return this;
};
for (var prop in SVGStringList.prototype) { //prototypeのコピーで継承を行う
  SVGTransformList.prototype[prop] = SVGStringList.prototype[prop];
}
/*SVGTransform*/ SVGTransformList.prototype.createSVGTransformFromMatrix = function(/*SVGMatrix*/ matrix ) {
  var t = new SVGTransform();
  t.setMatrix(matrix);
  return t;
}
/*SVGTransform*/ SVGTransformList.prototype.consolidate = function() {
  if(this.numberOfItems === 0) {
    return null;
  } else {
    var s = this.getItem(0), m = s.matrix;
    for (var i=1,nli=this.numberOfItems;i<nli;++i) {
      m = m.multiply(this.getItem(i).matrix);
    }
    s.setMatrix(m);
    this.initialize(s);
    return s;
  }
}

function SVGAnimatedTransformList() { 
  /*readonly SVGTransformList*/ this.animVal = this.baseVal = new SVGTransformList();
  return this;
};
function SVGPreserveAspectRatio() { 
  /*unsigned short*/ this.align = SVGPreserveAspectRatio.SVG_PRESERVEASPECTRATIO_XMIDYMID;
  /*unsigned short*/ this.meetOrSlice = SVGPreserveAspectRatio.SVG_MEETORSLICE_MEET;
  return this;
};
(function(t) {
    // Alignment Types
  /*unsigned short*/ t.SVG_PRESERVEASPECTRATIO_UNKNOWN  = 0;
  /*unsigned short*/ t.SVG_PRESERVEASPECTRATIO_NONE     = 1;
  /*unsigned short*/ t.SVG_PRESERVEASPECTRATIO_XMINYMIN = 2;
  /*unsigned short*/ t.SVG_PRESERVEASPECTRATIO_XMIDYMIN = 3;
  /*unsigned short*/ t.SVG_PRESERVEASPECTRATIO_XMAXYMIN = 4;
  /*unsigned short*/ t.SVG_PRESERVEASPECTRATIO_XMINYMID = 5;
  /*unsigned short*/ t.SVG_PRESERVEASPECTRATIO_XMIDYMID = 6;
  /*unsigned short*/ t.SVG_PRESERVEASPECTRATIO_XMAXYMID = 7;
  /*unsigned short*/ t.SVG_PRESERVEASPECTRATIO_XMINYMAX = 8;
  /*unsigned short*/ t.SVG_PRESERVEASPECTRATIO_XMIDYMAX = 9;
  /*unsigned short*/ t.SVG_PRESERVEASPECTRATIO_XMAXYMAX = 10;
    // Meet-or-slice Types
  /*unsigned short*/ t.SVG_MEETORSLICE_UNKNOWN   = 0;
  /*unsigned short*/ t.SVG_MEETORSLICE_MEET  = 1;
  /*unsigned short*/ t.SVG_MEETORSLICE_SLICE = 2;
})(SVGPreserveAspectRatio);

function SVGAnimatedPreserveAspectRatio() { 
  /*readonly SVGPreserveAspectRatio*/ this.animVal = this.baseVal = new SVGPreserveAspectRatio();
  return this;
};

function SVGPathSeg() { 
  /*readonly unsigned short*/ this.pathSegType = SVGPathSeg.PATHSEG_UNKNOWN;
  /*readonly DOMString*/      this.pathSegTypeAsLetter = null;
  return this;
};

(function(t) {
    // Path Segment Types
  /*unsigned short*/ t.PATHSEG_UNKNOWN                      = 0;
  /*unsigned short*/ t.PATHSEG_CLOSEPATH                    = 1;
  /*unsigned short*/ t.PATHSEG_MOVETO_ABS                   = 2;
  /*unsigned short*/ t.PATHSEG_MOVETO_REL                   = 3;
  /*unsigned short*/ t.PATHSEG_LINETO_ABS                   = 4;
  /*unsigned short*/ t.PATHSEG_LINETO_REL                   = 5;
  /*unsigned short*/ t.PATHSEG_CURVETO_CUBIC_ABS            = 6;
  /*unsigned short*/ t.PATHSEG_CURVETO_CUBIC_REL            = 7;
  /*unsigned short*/ t.PATHSEG_CURVETO_QUADRATIC_ABS        = 8;
  /*unsigned short*/ t.PATHSEG_CURVETO_QUADRATIC_REL        = 9;
  /*unsigned short*/ t.PATHSEG_ARC_ABS                      = 10;
  /*unsigned short*/ t.PATHSEG_ARC_REL                      = 11;
  /*unsigned short*/ t.PATHSEG_LINETO_HORIZONTAL_ABS        = 12;
  /*unsigned short*/ t.PATHSEG_LINETO_HORIZONTAL_REL        = 13;
  /*unsigned short*/ t.PATHSEG_LINETO_VERTICAL_ABS          = 14;
  /*unsigned short*/ t.PATHSEG_LINETO_VERTICAL_REL          = 15;
  /*unsigned short*/ t.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS     = 16;
  /*unsigned short*/ t.PATHSEG_CURVETO_CUBIC_SMOOTH_REL     = 17;
  /*unsigned short*/ t.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS = 18;
  /*unsigned short*/ t.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL = 19;
})(SVGPathSeg);
/*SVGPathSegxx
 *軽量化のために、SVGPathSegの継承をしない。また、{}オブジェクトで代用する予定
 */
function SVGPathSegClosePath() {
  return this;
};
SVGPathSegClosePath.prototype = {
  pathSegType : SVGPathSeg.PATHSEG_CLOSEPATH,
  pathSegTypeAsLetter : "z"
};
function SVGPathSegMovetoAbs() { 
  /*float* this.x;
  /*float* this.y;*/
  return this;
};
SVGPathSegMovetoAbs.prototype = {
  pathSegType : SVGPathSeg.PATHSEG_MOVETO_ABS,
  pathSegTypeAsLetter : "M"
};
function SVGPathSegMovetoRel() { 
  /*float*/ this.x;
  /*float*/ this.y;
  return this;
};
SVGPathSegMovetoRel.prototype = {
  pathSegType : SVGPathSeg.PATHSEG_MOVETO_REL,
  pathSegTypeAsLetter : "m"
};
function SVGPathSegLinetoAbs() { 
  /*float* this.x;
  /*float* this.y;*/
  return this;
};
SVGPathSegLinetoAbs.prototype = {
  pathSegType : SVGPathSeg.PATHSEG_LINETO_ABS,
  pathSegTypeAsLetter : "L"
};
function SVGPathSegLinetoRel() { 
  /*float*/ this.x;
  /*float*/ this.y;
  return this;
};
SVGPathSegLinetoRel.prototype = {
  pathSegType : SVGPathSeg.PATHSEG_LINETO_REL,
  pathSegTypeAsLetter : "l"
};
function SVGPathSegCurvetoCubicAbs() { 
  /*float* this.x;
  /*float* this.y;
  /*float* this.x1;
  /*float* this.y1;
  /*float* this.x2;
  /*float* this.y2;*/
  return this;
};
SVGPathSegCurvetoCubicAbs.prototype = {
  pathSegType : SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS,
  pathSegTypeAsLetter : "C"
};
function SVGPathSegCurvetoCubicRel() { 
  /*float* this.x;
  /*float* this.y;
  /*float* this.x1;
  /*float* this.y1;
  /*float* this.x2;
  /*float* this.y2;*/
  return this;
};
SVGPathSegCurvetoCubicRel.prototype = {
  pathSegType : SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL,
  pathSegTypeAsLetter : "c"
};
function SVGPathSegCurvetoQuadraticAbs() { 
  /*float*/ this.x;
  /*float*/ this.y;
  /*float*/ this.x1;
  /*float*/ this.y1;
  this.pathSegType = SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS;
  this.pathSegTypeAsLetter = "Q";
  return this;
};
function SVGPathSegCurvetoQuadraticRel() { 
  /*float*/ this.x;
  /*float*/ this.y;
  /*float*/ this.x1;
  /*float*/ this.y1;
  this.pathSegType = SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL;
  this.pathSegTypeAsLetter = "q";
  return this;
};

function SVGPathSegArcAbs() { 
  /*float*/ this.x;
  /*float*/ this.y;
  /*float*/ this.r1;
  /*float*/ this.r2;
  /*float*/ this.angle;
  return this;
};
SVGPathSegArcAbs.prototype = {
  /*boolean*/ largeArcFlag : true,
  /*boolean*/ sweepFlag : true,
  pathSegType : SVGPathSeg.PATHSEG_ARC_ABS,
  pathSegTypeAsLetter : "A"
};
function SVGPathSegArcRel() { 
  /*float*/ this.x;
  /*float*/ this.y;
  /*float*/ this.r1;
  /*float*/ this.r2;
  /*float*/ this.angle;
  return this;
};
SVGPathSegArcRel.prototype = {
  /*boolean*/ largeArcFlag : true,
  /*boolean*/ sweepFlag : true,
  pathSegType : SVGPathSeg.PATHSEG_ARC_REL,
  pathSegTypeAsLetter : "a"
};
function SVGPathSegLinetoHorizontalAbs() { 
  /*float*/ this.x;
  this.pathSegType = SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS;
  this.pathSegTypeAsLetter = "H";
  return this;
};
function SVGPathSegLinetoHorizontalRel() { 
  /*float*/ this.x;
  this.pathSegType = SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL;
  this.pathSegTypeAsLetter = "h";
  return this;
};
function SVGPathSegLinetoVerticalAbs() { 
  /*float*/ this.y;
  this.pathSegType = SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS;
  this.pathSegTypeAsLetter = "V";
  return this;
};
function SVGPathSegLinetoVerticalRel() { 
  /*float*/ this.y;
  this.pathSegType = SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL;
  this.pathSegTypeAsLetter = "v";
  return this;
};
function SVGPathSegCurvetoCubicSmoothAbs() { 
  /*float*/ this.x;
  /*float*/ this.y;
  /*float*/ this.x2;
  /*float*/ this.y2;
  this.pathSegType = SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS;
  this.pathSegTypeAsLetter = "S";
  return this;
};
function SVGPathSegCurvetoCubicSmoothRel() {
  /*float*/ this.x;
  /*float*/ this.y;
  /*float*/ this.x2;
  /*float*/ this.y2;
  this.pathSegType = SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL;
  this.pathSegTypeAsLetter = "s";
  return this;
};
function SVGPathSegCurvetoQuadraticSmoothAbs() {
  /*float*/ this.x;
  /*float*/ this.y;
  this.pathSegType = SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS;
  this.pathSegTypeAsLetter = "T";
  return this;
};
function SVGPathSegCurvetoQuadraticSmoothRel() {
  /*float*/ this.x;
  /*float*/ this.y;
  this.pathSegType = SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL;
  this.pathSegTypeAsLetter = "t";
  return this;
};
function SVGPathSegList() {
  return this;
};
for (var prop in SVGStringList.prototype) { //prototypeのコピーで継承を行う
  SVGPathSegList.prototype[prop] = SVGStringList.prototype[prop];
};

/*documentは引数の変数として登録しておく*/
(function(_doc, _pInt, _math) {
//freeArg関数はunloadで使う解放処理
NAIBU.freeArg = function() {
  SVGPathElement = _doc = _pInt = _math = null;
};
//仮のfill属性とstroke属性の処理
NAIBU._setPaint = function(tar, matrix) {
  /*以下では、スタイルシートを用いて、fill-とstroke-関連の
   *処理を行う。SVGPaintインターフェースをも用いる
   */
  var tod = tar.ownerDocument,
      _doc = tod._document_,
      el = tar._tar,
      style = tod.defaultView.getComputedStyle(tar, ""),
      fill = style.getPropertyCSSValue("fill"),
      stroke = style.getPropertyCSSValue("stroke"),
      fp = fill.paintType,
      sp = stroke.paintType,
      fillElement, fc,
      num = /*CSSPrimitiveValue.CSS_NUMBER*/ 1,
      t, evtt, fillOpacity, strs, cursor, vis, disp,
      strokeElement, strokeOpacity, tgebtstroke, sgsw, w, h, swx, tsd, strokedasharray;
  if (!el) {
    return;
  }
  /*あらかじめ、v:fill要素とv:stroke要素は消しておく*/
  while (el.firstChild) {
    el.removeChild(el.firstChild);
  }
  if ((fp === /*SVGPaint.SVG_PAINTTYPE_RGBCOLOR*/ 1) || (fp === /*SVGPaint.SVG_PAINTTYPE_CURRENTCOLOR*/ 102)) {
    if (fp === /*SVGPaint.SVG_PAINTTYPE_CURRENTCOLOR*/ 102) {
      /*再度、設定。css.jsのsetPropertyを参照*/
      style.setProperty("color", style.getPropertyValue("color"));
    }
    fillElement = _doc.createElement("v:fill");
    fc = fill.rgbColor;
    num = /*CSSPrimitiveValue.CSS_NUMBER*/ 1;
    fillElement.setAttribute("color", "rgb(" +fc.red.getFloatValue(num)+ "," +fc.green.getFloatValue(num)+ "," +fc.blue.getFloatValue(num)+ ")");
    fillOpacity = +(style.getPropertyValue("fill-opacity")) * style._list._opacity; //opacityを掛け合わせる
    if (fillOpacity < 1) {
      fillElement.setAttribute("opacity", fillOpacity+"");
    }
    el.appendChild(fillElement);
    fillElement = fc = fillOpacity = null;
  } else if (fill.uri) {
    /*以下では、Gradation関連の要素に、イベントを渡すことで、
     *この要素の、グラデーション描画を行う
     */
    t = tod.getElementById(fill.uri);
    if (t) {
      evtt = tod.createEvent("MutationEvents");
      evtt.initMutationEvent("DOMNodeInsertedIntoDocument", false, false, null, null, null, null, null);
      evtt._tar = _doc.createElement("v:fill");
      evtt._style = style;
      evtt._ttar = tar;
      t.dispatchEvent(evtt);
      if (t.localName !== "radialGradient") {
        el.appendChild(evtt._tar);
      }
      t = evtt = null;
    }
  } else {
    el.filled = "false";
  }
  if ((sp === /*SVGPaint.SVG_PAINTTYPE_RGBCOLOR*/ 1) || (sp === /*SVGPaint.SVG_PAINTTYPE_CURRENTCOLOR*/ 102)) {
    if (sp === /*SVGPaint.SVG_PAINTTYPE_CURRENTCOLOR*/ 102) {
      /*再度、設定。css.jsのsetPropertyを参照*/
      style.setProperty("color", style.getPropertyValue("color"));
    }
    strokeElement = _doc.createElement("v:stroke");
    sgsw = style.getPropertyCSSValue("stroke-width");
    w = tod.documentElement.viewport.width;
    h = tod.documentElement.viewport.height;
    sgsw._percent = _math.sqrt((w*w + h*h) / 2);
    swx = sgsw.getFloatValue(CSSPrimitiveValue.CSS_NUMBER) * _math.sqrt(_math.abs(matrix._determinant()));
    strokeElement.setAttribute("weight", swx + "px");
    sgsw = w = h = null;
    if (!stroke.uri) {
      fc = stroke.rgbColor;
      strokeElement.setAttribute("color", "rgb(" +fc.red.getFloatValue(num)+ "," +fc.green.getFloatValue(num)+ "," +fc.blue.getFloatValue(num)+ ")");
      strokeOpacity = +(style.getPropertyValue("stroke-opacity")) * (+(style.getPropertyValue("opacity"))); //opacityを掛け合わせる
      if (swx < 1) {
        strokeOpacity *= swx; //太さが1px未満なら色を薄くする
      }
      if (strokeOpacity < 1) {
        strokeElement.setAttribute("opacity", strokeOpacity+"");
      }
      fc = strokeOpacity = null;
    }
    strokeElement.setAttribute("miterlimit", style.getPropertyValue("stroke-miterlimit"));
    strokeElement.setAttribute("joinstyle", style.getPropertyValue("stroke-linejoin"));
    if (style.getPropertyValue("stroke-linecap") === "butt") {
      strokeElement.setAttribute("endcap", "flat");
    } else {
      strokeElement.setAttribute("endcap", style.getPropertyValue("stroke-linecap"));
    }
    tsd = style.getPropertyValue("stroke-dasharray");
    if (tsd !== "none") {
      if (tsd.indexOf(",") > 0) { //コンマ区切りの文字列の場合
        strs = tsd.split(",");
        for (var i = 0, sli = strs.length; i < sli; ++i) {
          strs[i] = _math.ceil(+(strs[i]) / parseFloat(style.getPropertyValue("stroke-width"))); //精密ではないので注意
        }
        strokedasharray = strs.join(" ");
        if (strs.length % 2 === 1) {
          strokedasharray += " " + strokedasharray;
        }
      }
      strokeElement.setAttribute("dashstyle", strokedasharray);
      tsd = strs = null;
    }
    el.appendChild(strokeElement);
    strokeElement = tsd = null;
  } else {
    el.stroked = "false";
  }
  cursor = style.getPropertyCSSValue("cursor");
  if (cursor && !cursor._isDefault) { //初期値でないならば
    var tc = cursor.cssText;
    el.style.cursor = tc.substring(tc.indexOf(":")+1, tc.length);
    tc = null;
  }
  vis = style.getPropertyCSSValue("visibility");
  if (vis　&& !vis._isDefault) {
    el.style.visibility = vis.cssText.substring(vis.cssText.indexOf(":")+1, vis.cssText.length);
  }
  disp = style.getPropertyCSSValue("display");
  if (disp && !disp._isDefault && (disp.cssText.indexOf("none") > -1)) {
    el.style.display = "none";
  　} else if (disp && !disp._isDefault && (disp.indexOf("inline-block") === -1)) {
    el.style.display = "inline-block";
  }
  tod = _doc = el = fill = stroke = sp = fp = style = cursor = tar = matrix = vis = disp = num = null;
};

function SVGPathElement(_doc) {
  SVGElement.apply(this);
  this._tar = _doc.createElement("v:shape");
  //interface SVGAnimatedPathData
  /*readonly SVGPathSegList*/ this.pathSegList = new SVGPathSegList();
  this.animatedPathSegList = this.pathSegList;
  /*readonly SVGPathSegList*/ this.normalizedPathSegList = new SVGPathSegList();
  this.animatedNormalizedPathSegList = this.normalizedPathSegList;
  /*readonly SVGAnimatedNumber*/ this.pathLength = new SVGAnimatedNumber();
  //以下は、d属性に変更があった場合の処理
  this.addEventListener("DOMAttrModified", this._attrModi, false);
  /*以下の処理は、このpath要素ノードがDOMツリーに追加されて初めて、
   *描画が開始されることを示す。つまり、appendChildで挿入されない限り、描画をしない。
   */
  this.addEventListener("DOMNodeInserted", this._nodeInsert, false);
  return this;
};
SVGPathElement.constructor = SVGElement;
SVGPathElement.prototype = new SVGElement();
(function(_sproto) {
_sproto._attrModi = function(evt){
  var tar = evt.target;
  if (evt.attrName === "d" && evt.newValue !== ""){
    /* d属性の値が空の場合は、描画を行わないようにする
     * 
     *SVG1.1 「8.3.9 The grammar for path data」の項目にある最後の文章を参照
     */
    var tnl = tar.normalizedPathSegList,
        tlist = tar.pathSegList;
    if (tnl.numberOfItems > 0) {
      tnl.clear();
      tlist.clear();
    }
    /*d属性の値を正規表現を用いて、二次元配列Dに変換している。もし、d属性の値が"M 20 30 L20 40"ならば、
     *JSONにおける表現は以下のとおり
     *D = [["M", 20, 30], ["L", 20 40]]
     */
    var taco = tar._com,
        sgs = taco.isSp,
        dd = evt.newValue
    .replace(taco.isRa, " -")
    .replace(taco.isRb, " ")
    .replace(taco.isRc, ",$1 ")
    .replace(taco.isRd, ",$1 1")
    .replace(taco.isRe, "")
    .split(","),
        dli=dd.length,
        isZ = taco._isZ,
        isM = taco._isM,
        isC = taco._isC,
        isL = taco._isL;
    for (var i=0;i<dli;++i) {
      var di = dd[i].match(sgs),
          s,
          tcc = tar.createSVGPathSegCurvetoCubicAbs;
      for (var j=1, dii=di[0], dili=di.length; j < dili; ++j) {
        if (isC[dii]) {
          s = tcc(+di[j+4], +di[j+5], +di[j], +di[j+1], +di[j+2], +di[j+3]);
          j += 5;
        } else if (isL[dii]) {
          s = tar.createSVGPathSegLinetoAbs(+di[j], +di[j+1]);
          ++j;
        } else if (isM[dii]) {
          s = tar.createSVGPathSegMovetoAbs(+di[j], +di[j+1]);
          ++j;
        } else if (isZ[dii]) {
          s = tar.createSVGPathSegClosePath();
        } else if (dii === "A") {
          s = tar.createSVGPathSegArcAbs(+di[j+5], +di[j+6], +di[j], +di[j+1], +di[j+2], +di[j+3], +di[j+4]);
          j += 6;
        } else if (dii === "m") {
          s = tar.createSVGPathSegMovetoRel(+di[j], +di[j+1]);
          ++j;
        } else if (dii === "l") {
          s = tar.createSVGPathSegLinetoRel(+di[j], +di[j+1]);
          ++j;
        } else if (dii === "c") {
          s = tar.createSVGPathSegCurvetoCubicRel(+di[j+4], +di[j+5], +di[j], +di[j+1], +di[j+2], +di[j+3]);
          j += 5;
        } else if (dii === "Q") {
          s = tar.createSVGPathSegCurvetoQuadraticAbs(+di[j+2], +di[j+3], +di[j], +di[j+1]);
          j += 3;
        } else if (dii === "q") {
          s = tar.createSVGPathSegCurvetoQuadraticRel(+di[j+2], +di[j+3], +di[j], +di[j+1]);
          j += 3;
        } else if (dii === "a") {
          s = tar.createSVGPathSegArcRel(+di[j+5], +di[j+6], +di[j], +di[j+1], +di[j+2], +di[j+3], +di[j+4]);
          j += 6;
        } else if (dii === "S") {
          s = tar.createSVGPathSegCurvetoCubicSmoothAbs(+di[j+2], +di[j+3], +di[j], +di[j+1]);
          j += 3;
        } else if (dii === "s") {
          s = tar.createSVGPathSegCurvetoCubicSmoothRel(+di[j+2], +di[j+3], +di[j], +di[j+1]);
          j += 3;
        } else if (dii === "T") {
          s = tar.createSVGPathSegCurvetoQuadraticSmoothAbs(+di[j], +di[j+1]);
          ++j;
        } else if (dii === "t") {
          s = tar.createSVGPathSegCurvetoQuadraticSmoothRel(+di[j], +di[j+1]);
          ++j;
        } else if (dii === "H") {
          s = tar.createSVGPathSegLinetoHorizontalAbs(+di[j]);
        } else if (dii === "h") {
          s = tar.createSVGPathSegLinetoHorizontalRel(+di[j]);
        } else if (dii === "V") {
          s = tar.createSVGPathSegLinetoVerticalAbs(+di[j]);
        } else if (dii === "v") {
          s = tar.createSVGPathSegLinetoVerticalRel(+di[j]);
        } else {
          s = new SVGPathSeg();
        }
        tlist.appendItem(s);
      }
    }
    di = s = tcc = sgs = dd = null;
    /*以下の処理は、pathSegListからnormalizedPathSegListへの
     *変換をする処理。相対座標を絶対座標に変換して、M、L、Cコマンドに正規化していく
     */
    var cx = 0, cy = 0,         //現在セグメントの終了点の絶対座標を示す　（相対座標を絶対座標に変換するときに使用）
        xn = 0, yn = 0,         //T,tコマンドで仮想的な座標を算出するのに用いる。第一コントロール点
        startx = 0, starty = 0; //M,mコマンドにおける始点座標（Z,zコマンドで用いる）
    for (var j=0, tli=tlist.numberOfItems;j<tli;++j) {
      var ti = tlist.getItem(j),
          ts = ti.pathSegType,
          dii = ti.pathSegTypeAsLetter;
      if (ts === /*SVGPathSeg.PATHSEG_UNKNOWN*/ 0) {
      } else {
        var rx = cx, ry = cy;   //rx, ryは前のセグメントの終了点
        if (ts % 2 === 1) {     //相対座標ならば
          cx += ti.x;
          cy += ti.y;
        } else {
          cx = ti.x;
          cy = ti.y;
        }
        if (isC[dii]) {
          tnl.appendItem(ti);
        } else if (isL[dii]) {
          tnl.appendItem(ti);
        } else if (isM[dii]) {
          if (j !== 0) {
            /*Mコマンドが続いた場合は、2番目以降はLコマンドと解釈する
             *W3C SVG1.1の「8.3.2 The "moveto" commands」を参照
             *http://www.w3.org/TR/SVG11/paths.html#PathDataMovetoCommands
             */
            var tg = tlist.getItem(j-1);
            if (tg.pathSegTypeAsLetter === "M") {
              tnl.appendItem(tar.createSVGPathSegLinetoAbs(cx, cy));
              continue;
            }
          }
          startx = cx;
          starty = cy;
          tnl.appendItem(ti);
        } else if (dii === "m") {
          if (j !== 0) {
            var tg = tlist.getItem(j-1);
            if (tg.pathSegTypeAsLetter === "m") {
              tnl.appendItem(tar.createSVGPathSegLinetoAbs(cx, cy));
              continue;
            }
          }
          startx = cx;
          starty = cy;
          tnl.appendItem(tar.createSVGPathSegMovetoAbs(cx, cy));
        } else if (dii === "l") {
          tnl.appendItem(tar.createSVGPathSegLinetoAbs(cx, cy));
        } else if (dii === "c") {
          tnl.appendItem(tar.createSVGPathSegCurvetoCubicAbs(cx, cy, ti.x1+rx, ti.y1+ry, ti.x2+rx, ti.y2+ry));
        } else if (isZ[dii]) {
          cx = startx;
          cy = starty;
          tnl.appendItem(ti);
        } else if (dii === "Q") {
          xn = 2*cx - ti.x1;
          yn = 2*cy - ti.y1;
          //2次スプライン曲線は近似的な3次ベジェ曲線に変換している
          tnl.appendItem(tar.createSVGPathSegCurvetoCubicAbs(cx, cy, (rx + 2*ti.x1) / 3, (ry + 2*ti.y1) / 3, (2*ti.x1 + cx) / 3, (2*ti.y1 + cy) / 3));
        } else if (dii === "q") {
          var x1 = ti.x1 + rx, y1 = ti.y1 + ry;
          xn = 2*cx - x1;
          yn = 2*cy - y1;
          tnl.appendItem(tar.createSVGPathSegCurvetoCubicAbs(cx, cy, (rx + 2*x1) / 3, (ry + 2*y1) / 3, (2*x1 + cx) / 3, (2*y1 + cy) / 3));
          x1 = y1 = null;
        } else if (dii === "A" || dii === "a") {
          (function(ti, cx, cy, rx, ry, tar, tnl) { //変数を隠蔽するためのfunction
            /*以下は、Arctoを複数のCuvetoに変換する処理
             *SVG 1.1 「F.6 Elliptical arc implementation notes」の章を参照
             *http://www.w3.org/TR/SVG11/implnote.html#ArcImplementationNotes
             */
            if (ti.r1 === 0 || ti.r2 === 0) {
              return;
            }
            var fS = ti.sweepFlag,
                psai = ti.angle,
                r1 = _math.abs(ti.r1),
                r2 = _math.abs(ti.r2),
                ctx = (rx - cx) / 2,  cty = (ry - cy) / 2,
                cpsi = _math.cos(psai　*　_math.PI　/　180),
                spsi = _math.sin(psai　*　_math.PI　/　180),
                rxd = cpsi*ctx + spsi*cty,
                ryd = -1*spsi*ctx + cpsi*cty,
                rxdd = rxd * rxd, rydd = ryd * ryd,
                r1x = r1 * r1,
                r2y = r2 * r2,
                lamda = rxdd/r1x + rydd/r2y,
                sds;
            if (lamda > 1) {
              r1 = _math.sqrt(lamda) * r1;
              r2 = _math.sqrt(lamda) * r2;
              sds = 0;
            }  else{
              var seif = 1;
              if (ti.largeArcFlag === fS) {
                seif = -1;
              }
              sds = seif * _math.sqrt((r1x*r2y - r1x*rydd - r2y*rxdd) / (r1x*rydd + r2y*rxdd));
            }
            var txd = sds*r1*ryd / r2,
                tyd = -1 * sds*r2*rxd / r1,
                tx = cpsi*txd - spsi*tyd + (rx+cx)/2,
                ty = spsi*txd + cpsi*tyd + (ry+cy)/2,
                rad = _math.atan2((ryd-tyd)/r2, (rxd-txd)/r1) - _math.atan2(0, 1),
                s1 = (rad >= 0) ? rad : 2 * _math.PI + rad,
                rad = _math.atan2((-ryd-tyd)/r2, (-rxd-txd)/r1) - _math.atan2((ryd-tyd)/r2, (rxd-txd)/r1),
                dr = (rad >= 0) ? rad : 2 * _math.PI + rad;
            if (!fS  &&  dr > 0) {
              dr -=   2*_math.PI;
            } else if (fS  &&  dr < 0) {
              dr += 2*_math.PI;
            }
            var sse = dr * 2 / _math.PI,
                seg = _math.ceil(sse<0 ? -1*sse  :  sse),
                segr = dr / seg,
                t = 8/3 * _math.sin(segr/4) * _math.sin(segr/4) / _math.sin(segr/2),
                cpsir1 = cpsi * r1, cpsir2 = cpsi * r2,
                spsir1 = spsi * r1, spsir2 = spsi * r2,
                mc = _math.cos(s1),
                ms = _math.sin(s1),
                x2 = rx - t * (cpsir1*ms + spsir2*mc),
                y2 = ry - t * (spsir1*ms - cpsir2*mc);
            for (var n = 0; n < seg; ++n) {
              s1 += segr;
              mc = _math.cos(s1);
              ms = _math.sin(s1);
              var x3 = cpsir1*mc - spsir2*ms + tx,
                  y3 = spsir1*mc + cpsir2*ms + ty,
                  dx = -t * (cpsir1*ms + spsir2*mc),
                  dy = -t * (spsir1*ms - cpsir2*mc);
              tnl.appendItem(tar.createSVGPathSegCurvetoCubicAbs(x3, y3, x2, y2, x3-dx, y3-dy));
              x2 = x3 + dx;
              y2 = y3 + dy;
            }
            ti= cx= cy= rx= ry= tar= tnl = null;
          })(ti, cx, cy, rx, ry, tar, tnl);
        } else if (dii === "S") {
          if (j !== 0) {
            var tg = tnl.getItem(tnl.numberOfItems-1);
            if (tg.pathSegTypeAsLetter === "C") {
              var x1 = 2*tg.x - tg.x2,
                  y1 = 2*tg.y - tg.y2;
            } else { //前のコマンドがCでなければ、現在の座標を第1コントロール点に用いる
              var x1 = rx,
                  y1 = ry;
            }
          } else {
            var x1 = rx,
                y1 = ry;
          }
          tnl.appendItem(tar.createSVGPathSegCurvetoCubicAbs(cx, cy, x1, y1, ti.x2, ti.y2));
          x1 = y1 = null;
        } else if (dii === "s") {
          if (j !== 0) {
            var tg = tnl.getItem(tnl.numberOfItems-1);
            if (tg.pathSegTypeAsLetter === "C") {
              var x1 = 2*tg.x - tg.x2,
                  y1 = 2*tg.y - tg.y2;
            } else {
              var x1 = rx,
                  y1 = ry;
            }
          } else {
            var x1 = rx,
                y1 = ry;
          }
          tnl.appendItem(tar.createSVGPathSegCurvetoCubicAbs(cx, cy, x1, y1, ti.x2+rx, ti.y2+ry));
          x1 = y1 = null;
        } else if (dii === "T" || dii === "t") {
          if (j !== 0) {
            var tg = tlist.getItem(j-1);
            if ("QqTt".indexOf(tg.pathSegTypeAsLetter) > -1) {
             } else {
              xn = rx, yn = ry;
            }
          } else {
            xn = rx, yn = ry;
          }
          tnl.appendItem(tar.createSVGPathSegCurvetoCubicAbs(cx, cy, (rx + 2*xn) / 3, (ry + 2*yn) / 3, (2*xn + cx) / 3, (2*yn + cy) / 3));
          xn = 2*cx - xn;
          yn = 2*cy - yn;
          xx1 = yy1 = null;
        } else if (dii === "H" || dii === "h") {
          tnl.appendItem(tar.createSVGPathSegLinetoAbs(cx, ry));
          cy = ry; //勝手にti.yが0としているため
        } else if (dii === "V" || dii === "v") {
          tnl.appendItem(tar.createSVGPathSegLinetoAbs(rx, cy));
          cx = rx;
        }
      }
    }
  }
  evt = tar = taco = cx = cy = xn = yn = startx = starty = tnl = tlist = ti = dii = ts = isZ = isM = isL = isC = s = null;
};
_sproto._nodeInsert = function(evt){
  var tar = evt.target;
  if (evt.eventPhase === /*Event.BUBBLING_PHASE*/ 3) {
    return; //強制終了させる
  }
  var tnext = tar.nextSibling,
      tpar = tar.parentNode,
      isLast = true;
  if (tnext && tnext._tar && tpar._tar && (tnext._tar.parentNode === tpar._tar)) {
    tpar._tar.insertBefore(tar._tar, tnext._tar);
  } else if (tnext && !tnext._tar && tpar._tar) {
    /*以下の処理は、_tarプロパティがない要素オブジェクトがあるため、それに対処するもの
     *use要素や実体参照などは_tarプロパティがないことに注意
     */
    while (tnext) {
      if (tnext._tar && (tnext._tar.parentNode === tpar._tar)) {
        tpar._tar.insertBefore(tar._tar, tnext._tar);
        isLast = false;
      } 
      tnext = tnext.nextSibling;
    }
    if (isLast) {
      tpar._tar.appendChild(tar._tar);
    }
  } else if (!tnext && tpar._tar) {
    tpar._tar.appendChild(tar._tar);      
  }
  tnext = tpar = isLast = null;
  tar.addEventListener("DOMNodeInsertedIntoDocument", tar._nodeInsertInto, false);
  evt = tar = null;
};
_sproto._nodeInsertInto = function(evt){
  /*以下の処理は、normalizedpathSegListとCTMに基づいて、
   *SVGのd属性をVMLに変換していく処理である。
   */
  var tar = evt.target,
      matrix = tar.getScreenCTM(),
      tlist = tar.normalizedPathSegList,
      _parseInt = _pInt,
      dat = [],
      ma = matrix.a, mb = matrix.b, mc = matrix.c, md = matrix.d, me = matrix.e, mf = matrix.f,
      cname = tar._com._nameCom,
      isZ = tar._com._isZ, isC = tar._com._isC;
  for (var i=0, tli=tlist.numberOfItems;i<tli;++i) {
    var ti = tlist[i],
        tx = ti.x,
        ty = ti.y,
        tps = ti.pathSegTypeAsLetter,
        t = cname[tps];
    if (isC[tps]) {
      /*CTM(mx）の行列と座標（x, y)の積を算出する。数学における表現は以下のとおり
       *[ma mc me]   [x]
       *[mb md mf] * [y]
       *[0  0  1 ]   [1]
       */
      t += [_parseInt(ma*ti.x1 + mc*ti.y1 + me, 10),
             _parseInt(mb*ti.x1 + md*ti.y1 + mf, 10),
             _parseInt(ma*ti.x2 + mc*ti.y2 + me, 10),
             _parseInt(mb*ti.x2 + md*ti.y2 + mf, 10),
             _parseInt(ma*tx + mc*ty + me, 10),
             _parseInt(mb*tx + md*ty + mf, 10)].join(" ");
    } else if (!isZ[tps]) {
      t += _parseInt(ma*tx + mc*ty + me, 10)+ " " +_parseInt(mb*tx + md*ty + mf, 10);
    }
    dat[i] = t;
  }
  var vi = tar.ownerDocument.documentElement,
      tt = tar._tar;
  dat.push(" e");
  tt.path = dat.join(" ");
  tt.coordsize = vi.width.baseVal.value + " " + vi.height.baseVal.value;
  NAIBU._setPaint(tar, matrix);
  delete tar._cacheMatrix;
  delete tar._currentStyle;
  evt = tar = dat = t = tx = ty = matrix = tlist = x = y = _parseInt = ma = mb = mc = md = me = mf = vi = isZ = isC = i = tli = tps = ti = cname = tt = null;
};
_sproto._com = {
  _nameCom : {
    z : " x ",
    Z : " x ",
    C : "c",
    L : "l",
    M : "m"
  },
  _isZ : {
    z : 1,
    Z : 1
  },
  _isC : {
    C : 1
  },
  _isL : {
    L : 1
  },
  _isM : {
    M : 1
  },
  isRa : /\-/g,
  isRb : /,/g,
  isRc : /([a-yA-Y])/g,
  isRd : /([zZ])/g,
  isRe : /,/,
  isSp : /\S+/g
};
  /*float*/         _sproto.getTotalLength = function() {
    var s = 0,
        nl = this.normalizedPathSegList;
    for (var i=1,nln=nl.numberOfItems,ms=null;i<nln;++i) {
      var seg = nl.getItem(i);
      if (seg.pathSegType === SVGPathSeg.PATHSEG_LINETO_ABS) {
        var ps = nl.getItem(i-1);
        s += _math.sqrt(_math.pow((seg.x-ps.x), 2) + _math.pow((seg.y-ps.y), 2));
      } else if (seg.pathSegType === SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS) {
        var ps = nl.getItem(i-1), dd = 0;
        /*2点のハンドルを結んだ線分の3辺と、
         *セグメントの始点と終点を結んだ1辺を足して2で割ったものを、ベジェ曲線の距離の近似値とする
         *
         *注意
         *本来は積分とシンプソン法などの解析を使って、媒介曲線であるベジェ曲線の距離を割り出すのが、
         *精密であり望ましいが、ここでは時間がかかりすぎるので別の方法をとる
         */
        dd += _math.sqrt(_math.pow((seg.x1-ps.x), 2) + _math.pow((seg.y1-ps.y), 2));
        dd += _math.sqrt(_math.pow((seg.x2-seg.x1), 2) + _math.pow((seg.y2-seg.y1), 2));
        dd += _math.sqrt(_math.pow((seg.x2-seg.x1), 2) + _math.pow((seg.y2-seg.y1), 2));
        dd += _math.sqrt(_math.pow((seg.x-ps.x), 2) + _math.pow((seg.y-ps.y), 2));
        s += dd / 2;
      } else if (seg.pathSegType === SVGPathSeg.PATHSEG_CLOSEPATH) {
        var ps = nl.getItem(i-1), ms = nl.getItem(0);
        s += _math.sqrt(_math.pow((ps.x-ms.x), 2) + _math.pow((ps.y-ms.y), 2));
      }

    }
    this.pathLength.baseVal = s;
    return s;
  };
  /*SVGPoint*/      _sproto.getPointAtLength = function(/*float*/ distance ) {
    var segn = this.getPathSegAtLength(distance),
        x = 0,
        y = 0,
        nl = this.normalizedPathSegList,
        seg = nl.getItem(segn),
        s = this.ownerDocument.documentElement.createSVGPoint();
    if ((segn-1) <= 0) {
      s.x = seg.x;
      s.y = seg.y;
      return s;
    }
    var ps = nl.getItem(segn-1);
    if (seg.pathSegType === SVGPathSeg.PATHSEG_LINETO_ABS) {
      var segl = _math.sqrt(_math.pow((seg.x-ps.x), 2) + _math.pow((seg.y-ps.y), 2));
      var t = (segl + this._dis) / segl;
      s.x = ps.x + t * (seg.x-ps.x);
      s.y = ps.y + t * (seg.y-ps.y);
    } else if (seg.pathSegType === SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS) {
      var dd = 0;
      dd += _math.sqrt(_math.pow((seg.x1-ps.x), 2) + _math.pow((seg.y1-ps.y), 2));
      dd += _math.sqrt(_math.pow((seg.x2-seg.x1), 2) + _math.pow((seg.y2-seg.y1), 2));
      dd += _math.sqrt(_math.pow((seg.x2-seg.x1), 2) + _math.pow((seg.y2-seg.y1), 2));
      dd += _math.sqrt(_math.pow((seg.x-ps.x), 2) + _math.pow((seg.y-ps.y), 2));
      var segl = dd / 2;
      var t = (segl + this._dis) / segl;
      /*以下はベジェ曲線の公式について、パラメータtによってまとめて整理したものを、
       *使って、ポイントの座標を演算する
       */
      s.x = (3*seg.x1 + seg.x - 3*seg.x2 - ps.x) * _math.pow(t, 3)
           +3*(ps.x - 2*seg.x1 + seg.x2) * _math.pow(t, 2)
           +3*(seg.x1 - ps.x) * t
           +ps.x;
      s.y = (3*seg.y1 + seg.y - 3*seg.y2 - ps.y) * _math.pow(t, 3)
           +3*(ps.y - 2*seg.y1 + seg.y2) * _math.pow(t, 2)
           +3*(seg.y1 - ps.y) * t
           +ps.y;
    } else if (seg.pathSegType === SVGPathSeg.MOVETO_ABS) {
      s.x = seg.x;
      s.y = seg.y;
    } else if (seg.pathSegType === SVGPathSeg.PATHSEG_CLOSEPATH) {
      var ms = nl.getItem(0), segl = _math.sqrt(_math.pow((seg.x-mx.x), 2) + _math.pow((seg.y-ms.y), 2));
      var t = (segl + this._dis) / segl;
      s.x = ms.x + t * (seg.x-ms.x);
      s.y = ms.y + t * (seg.y-ms.y);
    }
    return s;
  };
  /*unsigned long*/ _sproto.getPathSegAtLength = function(/*float*/ distance ) {
    var nl = this.normalizedPathSegList; //仕様ではpathSegList
    for (var i=0,nln=nl.numberOfItems,ms=null;i<nln;++i) {
      var seg = nl.getItem(i);
      if (seg.pathSegType === SVGPathSeg.PATHSEG_LINETO_ABS) {
        var ps = nl.getItem(i-1);
        distance -= _math.sqrt(_math.pow((seg.x-ps.x), 2) + _math.pow((seg.y-ps.y), 2));
      } else if (seg.pathSegType === SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS) {
        var ps = nl.getItem(i-1), dd = 0;
        dd += _math.sqrt(_math.pow((seg.x1-ps.x), 2) + _math.pow((seg.y1-ps.y), 2));
        dd += _math.sqrt(_math.pow((seg.x2-seg.x1), 2) + _math.pow((seg.y2-seg.y1), 2));
        dd += _math.sqrt(_math.pow((seg.x2-seg.x1), 2) + _math.pow((seg.y2-seg.y1), 2));
        dd += _math.sqrt(_math.pow((seg.x-ps.x), 2) + _math.pow((seg.y-ps.y), 2));
        distance -= dd / 2;
        dd = null;
      } else if (seg.pathSegType === SVGPathSeg.PATHSEG_CLOSEPATH) {
        var ps = nl.getItem(i-1), ms = nl.getItem(0);
        distance -= _math.sqrt(_math.pow((ps.x-ms.x), 2) + _math.pow((ps.y-ms.y), 2));
      }
      if (distance <= 0) {
        /*_disプロパティは前述のgetPointAtLengthメソッドで使う*/
        this._dis = distance;
        distance = null;
        return i;
      }
    }
    /*もし、distanceがパスの距離よりも長い場合、
     *最後のセグメントの番号を返す
     *なお、これはSVG1.1の仕様の想定外のこと
     */
    return (nl.numberOfItems - 1);
  };
  /*SVGPathSegClosePath*/    _sproto.createSVGPathSegClosePath = function() {
    var _SVGPathSegClosePath = SVGPathSegClosePath;
    return (new _SVGPathSegClosePath());
  };
  /*SVGPathSegMovetoAbs*/    _sproto.createSVGPathSegMovetoAbs = function(/*float*/ x, /*float*/ y ) {
    var _SVGPathSegMovetoAbs = SVGPathSegMovetoAbs, s = new _SVGPathSegMovetoAbs();
    s.x = x;
    s.y = y;
    return s;
  };
  /*SVGPathSegMovetoRel*/    _sproto.createSVGPathSegMovetoRel = function(/*float*/ x, /*float*/ y ) {
    var s = new SVGPathSegMovetoRel();
    s.x = x;
    s.y = y;
    return s;
  };
  /*SVGPathSegLinetoAbs*/    _sproto.createSVGPathSegLinetoAbs = function(/*float*/ x, /*float*/ y ) {
    var s = new SVGPathSegLinetoAbs();
    s.x = x;
    s.y = y;
    return s;
  };
  /*SVGPathSegLinetoRel*/    _sproto.createSVGPathSegLinetoRel = function(/*float*/ x, /*float*/ y ) {
    var s = new SVGPathSegLinetoRel();
    s.x = x;
    s.y = y;
    return s;
  };
  /*SVGPathSegCurvetoCubicAbs*/    _sproto.createSVGPathSegCurvetoCubicAbs = function(/*float*/ x, /*float*/ y, /*float*/ x1, /*float*/ y1, /*float*/ x2, /*float*/ y2 ) {
    var _SVGPathSegCurvetoCubicAbs = SVGPathSegCurvetoCubicAbs, s = new _SVGPathSegCurvetoCubicAbs();
    s.x = x;
    s.y = y;
    s.x1 = x1;
    s.y1 = y1;
    s.x2 = x2;
    s.y2 = y2;
    return s;
  };
  /*SVGPathSegCurvetoCubicRel*/    _sproto.createSVGPathSegCurvetoCubicRel = function(/*float*/ x, /*float*/ y, /*float*/ x1, /*float*/ y1, /*float*/ x2, /*float*/ y2 ) {
    var s = new SVGPathSegCurvetoCubicRel();
    s.x = x;
    s.y = y;
    s.x1 = x1;
    s.y1 = y1;
    s.x2 = x2;
    s.y2 = y2;
    return s;
  };
  /*SVGPathSegCurvetoQuadraticAbs*/    _sproto.createSVGPathSegCurvetoQuadraticAbs = function(/*float*/ x, /*float*/ y, /*float*/ x1, /*float*/ y1 ) {
    var s = new SVGPathSegCurvetoQuadraticAbs();
    s.x = x;
    s.y = y;
    s.x1 = x1;
    s.y1 = y1;
    return s;
  };
  /*SVGPathSegCurvetoQuadraticRel*/    _sproto.createSVGPathSegCurvetoQuadraticRel = function(/*float*/ x, /*float*/ y, /*float*/ x1, /*float*/ y1 ) {
    var s = new SVGPathSegCurvetoQuadraticRel();
    s.x = x;
    s.y = y;
    s.x1 = x1;
    s.y1 = y1;
    return s;
  };
  /*SVGPathSegArcAbs*/    _sproto.createSVGPathSegArcAbs = function(/*float*/ x, /*float*/ y, /*float*/ r1, /*float*/ r2, /*float*/ angle, /*boolean*/ largeArcFlag, /*boolean*/ sweepFlag ) {
    var s = new SVGPathSegArcAbs();
    s.x = x;
    s.y = y;
    s.r1 = r1;
    s.r2 = r2;
    s.angle = angle;
    s.largeArcFlag = largeArcFlag;
    s.sweepFlag = sweepFlag;
    return s;
  };
  /*SVGPathSegArcRel*/    _sproto.createSVGPathSegArcRel = function(/*float*/ x, /*float*/ y, /*float*/ r1, /*float*/ r2, /*float*/ angle, /*boolean*/ largeArcFlag, /*boolean*/ sweepFlag ) {
    var s = new SVGPathSegArcRel();
    s.x = x;
    s.y = y;
    s.r1 = r1;
    s.r2 = r2;
    s.angle = angle;
    s.largeArcFlag = largeArcFlag;
    s.sweepFlag = sweepFlag;
    return s;
  };
  /*SVGPathSegLinetoHorizontalAbs*/    _sproto.createSVGPathSegLinetoHorizontalAbs = function(/*float*/ x ) {
    var s = new SVGPathSegLinetoHorizontalAbs();
    s.x = x;
    s.y = 0; //DOMでは指定されていないが、変換処理が楽なので用いる
    return s;
  };
  /*SVGPathSegLinetoHorizontalRel*/    _sproto.createSVGPathSegLinetoHorizontalRel = function(/*float*/ x ) {
    var s = new SVGPathSegLinetoHorizontalRel();
    s.x = x;
    s.y = 0;
    return s;
  };
  /*SVGPathSegLinetoVerticalAbs*/    _sproto.createSVGPathSegLinetoVerticalAbs = function(/*float*/ y ) {
    var s = new SVGPathSegLinetoVerticalAbs();
    s.x = 0;
    s.y = y;
    return s;
  };
  /*SVGPathSegLinetoVerticalRel*/    _sproto.createSVGPathSegLinetoVerticalRel = function(/*float*/ y ) {
    var s = new SVGPathSegLinetoVerticalRel();
    s.x = 0;
    s.y = y;
    return s;
  };
  /*SVGPathSegCurvetoCubicSmoothAbs*/    _sproto.createSVGPathSegCurvetoCubicSmoothAbs = function(/*float*/ x, /*float*/ y, /*float*/ x2, /*float*/ y2 ) {
    var s = new SVGPathSegCurvetoCubicSmoothAbs();
    s.x = x;
    s.y = y;
    s.x2 = x2;
    s.y2 = y2;
    return s;
  };
  /*SVGPathSegCurvetoCubicSmoothRel*/    _sproto.createSVGPathSegCurvetoCubicSmoothRel = function(/*float*/ x, /*float*/ y, /*float*/ x2, /*float*/ y2 ) {
    var s = new SVGPathSegCurvetoCubicSmoothRel();
    s.x = x;
    s.y = y;
    s.x2 = x2;
    s.y2 = y2;
    return s;
  };
  /*SVGPathSegCurvetoQuadraticSmoothAbs*/    _sproto.createSVGPathSegCurvetoQuadraticSmoothAbs = function(/*float*/ x, /*float*/ y ) {
    var s = new SVGPathSegCurvetoQuadraticSmoothAbs();
    s.x = x;
    s.y = y;
    return s;
  };
  /*SVGPathSegCurvetoQuadraticSmoothRel*/    _sproto.createSVGPathSegCurvetoQuadraticSmoothRel = function(/*float*/ x, /*float*/ y ) {
    var s = new SVGPathSegCurvetoQuadraticSmoothRel();
    s.x = x;
    s.y = y;
    return s;
  };
})(SVGPathElement.prototype)
  NAIBU.SVGPathElement = SVGPathElement; //IE8では、SVGPathElementはローカル変数
})(document, parseInt, Math);

function SVGRectElement(_doc) {
  SVGElement.apply(this);
  this._tar = _doc.createElement("v:shape");
  _doc = null;
  /*readonly SVGAnimatedLength*/ this.x = new SVGAnimatedLength();
  /*readonly SVGAnimatedLength*/ this.y = new SVGAnimatedLength();
  /*readonly SVGAnimatedLength*/ this.width = new SVGAnimatedLength();
  /*readonly SVGAnimatedLength*/ this.height = new SVGAnimatedLength();
  /*readonly SVGAnimatedLength*/ this.rx = new SVGAnimatedLength();
  /*readonly SVGAnimatedLength*/ this.ry = new SVGAnimatedLength();
  this.addEventListener("DOMNodeInserted", function(evt){
    if (evt.eventPhase === /*Event.BUBBLING_PHASE*/ 3) {
      return; //強制終了させる
    }
    var tar = evt.target,
        tnext = tar.nextSibling,
        tpar = tar.parentNode,
        isLast = true;
    if (tnext && tnext._tar && tpar._tar && (tnext._tar.parentNode === tpar._tar)) {
      tpar._tar.insertBefore(tar._tar, tnext._tar);
    } else if (tnext && !tnext._tar && tpar._tar) {
      /*以下の処理は、_tarプロパティがない要素オブジェクトがあるため、それに対処するもの
       *use要素や実体参照などは_tarプロパティがないことに注意
       */
      while (tnext) {
        if (tnext._tar && (tnext._tar.parentNode === tpar._tar)) {
          tpar._tar.insertBefore(tar._tar, tnext._tar);
          isLast = false;
        } 
        tnext = tnext.nextSibling;
      }
      if (isLast) {
        tpar._tar.appendChild(tar._tar);
      }
    } else if (!tnext && tpar._tar) {
      tpar._tar.appendChild(tar._tar);      
    }
    tnext = tpar = isLast = null;
    tar.addEventListener("DOMNodeInsertedIntoDocument", function(evt) {
      var tar = evt.target,
          style = tar.ownerDocument.defaultView.getComputedStyle(tar, ""),
          fontSize = parseFloat(style.getPropertyValue("font-size"));
      tar.x.baseVal._emToUnit(fontSize);
      tar.y.baseVal._emToUnit(fontSize);
      tar.width.baseVal._emToUnit(fontSize);
      tar.height.baseVal._emToUnit(fontSize);
      var rx = tar.getAttributeNS(null, "rx"),
          ry = tar.getAttributeNS(null, "ry"),
          x = tar.x.baseVal.value,
          y = tar.y.baseVal.value,
          xw = x + tar.width.baseVal.value,
          yh = y + tar.height.baseVal.value,
          list;
      if ((rx || ry) && (rx !== "0") && (ry !== "0")) {
        tar.rx.baseVal._emToUnit(fontSize);
        tar.ry.baseVal._emToUnit(fontSize);
        var thrx = tar.rx.baseVal,
            thry = tar.ry.baseVal,
            twidth = tar.width.baseVal.value,
            theight = tar.height.baseVal.value;
        thrx.value = rx ? thrx.value : thry.value;
        thry.value = ry ? thry.value : thrx.value;
        //rx属性が幅より大きければ、幅の半分を属性に設定(ry属性は高さと比較する）
        if (thrx.value > twidth / 2) {
          thrx.value = twidth / 2;
        }
        if (thry.value > theight / 2) {
          thry.value = theight / 2;
        }
        var rxv = thrx.value,
            ryv = thry.value,
            rrx = rxv * 0.55228,
            rry = ryv * 0.55228,
            a = xw - rxv,
            b = x + rxv,
            c = y + ryv,
            d = yh - ryv;
        list = ["m",b,y, "l",a,y, "c",a+rrx,y,xw,c-rry,xw,c, "l",xw,d, "c",xw,d+rry,a+rrx,yh,a,yh, "l",b,yh, "c",b-rrx,yh,x,d+rry,x,d, "l",x,c, "c",x,c-rry,b-rrx,y,b,y];
      } else {
        list = ["m",x,y, "l",x,yh, xw,yh, xw,y, "x e"];
      }
      //以下は、配列listそのものをCTMで座標変換していく処理
      var par = tar.ownerDocument.documentElement,
          ctm = tar.getScreenCTM(),
          dat, p, pmt,
          ele = tar._tar,
          vi = tar.ownerDocument.documentElement,
          w = vi.width.baseVal.value,
          h = vi.height.baseVal.value;
      for (var i=0, lili=list.length;i<lili;) {
        if (isNaN(list[i])) { //コマンド文字は読み飛ばす
          ++i;
          continue;
        }
        p = par.createSVGPoint();
        p.x = list[i];
        p.y = list[i+1];
        pmt = p.matrixTransform(ctm);
        list[i] = pmt.x;
        ++i;
        list[i] = pmt.y;
        ++i;
        p = pmt = null;
      }
      dat = list.join(" ");
      //VMLに結び付けていく
      ele.path = dat;
      ele.coordsize = w + " " + h;
      NAIBU._setPaint(tar, ctm);
      delete tar._cacheMatrix;
      delete tar._currentStyle;
      evt = tar = style = list = dat = ele = vi = fontSize = null;
    }, false);
    evt = tar = null;
  }, false);
  return this;
};
SVGRectElement.constructor = SVGElement;
SVGRectElement.prototype = new SVGElement();

function SVGCircleElement(_doc) { 
  SVGElement.apply(this);
  this._tar = _doc.createElement("v:shape");
  /*readonly SVGAnimatedLength*/ this.cx = new SVGAnimatedLength();
  /*readonly SVGAnimatedLength*/ this.cy = new SVGAnimatedLength();
  /*readonly SVGAnimatedLength*/ this.r = new SVGAnimatedLength();
  this.addEventListener("DOMNodeInserted", function(evt){
    var tar = evt.target;
    if (evt.eventPhase === /*Event.BUBBLING_PHASE*/ 3) {
      return; //強制終了させる
    }
    var tnext = tar.nextSibling, tpar = tar.parentNode, isLast = true;
    if (tnext && tnext._tar && tpar._tar && (tnext._tar.parentNode === tpar._tar)) {
      tpar._tar.insertBefore(tar._tar, tnext._tar);
    } else if (tnext && !tnext._tar && tpar._tar) {
      /*以下の処理は、_tarプロパティがない要素オブジェクトがあるため、それに対処するもの
       *use要素や実体参照などは_tarプロパティがないことに注意
       */
      while (tnext) {
        if (tnext._tar && (tnext._tar.parentNode === tpar._tar)) {
          tpar._tar.insertBefore(tar._tar, tnext._tar);
          isLast = false;
        } 
        tnext = tnext.nextSibling;
      }
      if (isLast) {
        tpar._tar.appendChild(tar._tar);
      }
    } else if (!tnext && tpar._tar) {
      tpar._tar.appendChild(tar._tar);      
    }
    tnext = tpar = isLast = null;
    tar.addEventListener("DOMNodeInsertedIntoDocument", function(evt) {
      var tar = evt.target, style = tar.ownerDocument.defaultView.getComputedStyle(tar, "");
      var fontSize = parseFloat(style.getPropertyValue("font-size"));
      tar.cx.baseVal._emToUnit(fontSize);
      tar.cy.baseVal._emToUnit(fontSize);
      tar.r.baseVal._emToUnit(fontSize);
      var cx = tar.cx.baseVal.value, cy = tar.cy.baseVal.value, rx = ry = tar.r.baseVal.value;
      var top = cy - ry, left = cx - rx, bottom = cy + ry, right = cx + rx;
        var rrx = rx * 0.55228, rry = ry * 0.55228;
        var list = ["m", cx,top, "c", cx-rrx,top, left,cy-rry, left,cy, left,cy+rry, cx-rrx,bottom, cx,bottom, cx+rrx,bottom, right,cy+rry, right,cy, right,cy-rry, cx+rrx,top, cx,top, "x e"];
        //以下は、配列listそのものをCTMで座標変換していく処理
        var par = tar.ownerDocument.documentElement, ctm = tar.getScreenCTM();
        for (var i=0, lili=list.length;i<lili;) {
          if (isNaN(list[i])) { //コマンド文字は読み飛ばす
            ++i;
            continue;
          }
          var p = par.createSVGPoint();
          p.x = list[i];
          p.y = list[i+1];
          var pmt = p.matrixTransform(ctm);
          list[i] = pmt.x;
          ++i;
          list[i] = pmt.y;
          ++i;
          p = pmt = null;
        }
        var dat = list.join(" ");
        //VMLに結び付けていく
        var ele = tar._tar, vi = tar.ownerDocument.documentElement;
        var w = vi.width.baseVal.value, h = vi.height.baseVal.value;
        ele.path = dat;
        ele.coordsize = w + " " + h;
        NAIBU._setPaint(tar, ctm);
        delete tar._cacheMatrix;
        delete tar._currentStyle;
        evt = tar = list = style = fontSize = dat = ele = null;
    }, false);
    evt = tar = null;
  }, false);
  return this;
};
SVGCircleElement.constructor = SVGElement;
SVGCircleElement.prototype = new SVGElement();

function SVGEllipseElement(_doc) { 
  SVGElement.apply(this);
  this._tar = _doc.createElement("v:shape");
  _doc = null;
  /*readonly SVGAnimatedLength*/ this.cx = new SVGAnimatedLength();
  /*readonly SVGAnimatedLength*/ this.cy = new SVGAnimatedLength();
  /*readonly SVGAnimatedLength*/ this.rx = new SVGAnimatedLength();
  /*readonly SVGAnimatedLength*/ this.ry = new SVGAnimatedLength();
  this.addEventListener("DOMNodeInserted", function(evt){
    var tar = evt.target;
    if (evt.eventPhase === /*Event.BUBBLING_PHASE*/ 3) {
      return; //強制終了させる
    }
    var tnext = tar.nextSibling, tpar = tar.parentNode, isLast = true;
    if (tnext && tnext._tar && tpar._tar && (tnext._tar.parentNode === tpar._tar)) {
      tpar._tar.insertBefore(tar._tar, tnext._tar);
    } else if (tnext && !tnext._tar && tpar._tar) {
      /*以下の処理は、_tarプロパティがない要素オブジェクトがあるため、それに対処するもの
       *use要素や実体参照などは_tarプロパティがないことに注意
       */
      while (tnext) {
        if (tnext._tar && (tnext._tar.parentNode === tpar._tar)) {
          tpar._tar.insertBefore(tar._tar, tnext._tar);
          isLast = false;
        } 
        tnext = tnext.nextSibling;
      }
      if (isLast) {
        tpar._tar.appendChild(tar._tar);
      }
    } else if (!tnext && tpar._tar) {
      tpar._tar.appendChild(tar._tar);      
    }
    tnext = tpar = isLast = null;
    tar.addEventListener("DOMNodeInsertedIntoDocument", function(evt) {
      var tar = evt.target, style = tar.ownerDocument.defaultView.getComputedStyle(tar, "");
      var fontSize = parseFloat(style.getPropertyValue("font-size"));
      tar.cx.baseVal._emToUnit(fontSize);
      tar.cy.baseVal._emToUnit(fontSize);
      tar.rx.baseVal._emToUnit(fontSize);
      tar.ry.baseVal._emToUnit(fontSize);
      var cx = tar.cx.baseVal.value, cy = tar.cy.baseVal.value, rx = tar.rx.baseVal.value, ry = tar.ry.baseVal.value;
      var top = cy - ry, left = cx - rx, bottom = cy + ry, right = cx + rx;
      var rrx = rx * 0.55228, rry = ry * 0.55228;
      var list = ["m", cx,top, "c", cx-rrx,top, left,cy-rry, left,cy, left,cy+rry, cx-rrx,bottom, cx,bottom, cx+rrx,bottom, right,cy+rry, right,cy, right,cy-rry, cx+rrx,top, cx,top, "x e"];
      //以下は、配列listそのものをCTMで座標変換していく処理
      var par = tar.ownerDocument.documentElement, ctm = tar.getScreenCTM();
      for (var i=0, lili=list.length;i<lili;) {
        if (isNaN(list[i])) { //コマンド文字は読み飛ばす
          ++i;
          continue;
        }
        var p = par.createSVGPoint();
        p.x = list[i];
        p.y = list[i+1];
        var pmt = p.matrixTransform(ctm);
        list[i] = pmt.x;
        ++i;
        list[i] = pmt.y;
        ++i;
        p = pmt = null;
      }
      var dat = list.join(" ");
      //VMLに結び付けていく
      var ele = tar._tar, vi = tar.ownerDocument.documentElement;
      var w = vi.width.baseVal.value, h = vi.height.baseVal.value;
      ele.path = dat;
      ele.coordsize = w + " " + h;
      NAIBU._setPaint(tar, ctm);
      delete tar._cacheMatrix;
      delete tar._currentStyle;
      evt = ele = tar = style = fontSize = dat = list = ctm = w = h = null;
    }, false);
    evt = tar = null;
  }, false);
  return this;
};
SVGEllipseElement.constructor = SVGElement;
SVGEllipseElement.prototype = new SVGElement();

function SVGLineElement(_doc) { 
  SVGElement.apply(this);
  this._tar = _doc.createElement("v:shape");
  _doc = null;
  /*readonly SVGAnimatedLength*/ this.x1 = new SVGAnimatedLength();
  /*readonly SVGAnimatedLength*/ this.y1 = new SVGAnimatedLength();
  /*readonly SVGAnimatedLength*/ this.x2 = new SVGAnimatedLength();
  /*readonly SVGAnimatedLength*/ this.y2 = new SVGAnimatedLength();
  this.addEventListener("DOMNodeInserted", function(evt){
    var tar = evt.target;
    if (evt.eventPhase === /*Event.BUBBLING_PHASE*/ 3) {
      return; //強制終了させる
    }
    var tnext = tar.nextSibling, tpar = tar.parentNode, isLast = true;
    if (tnext && tnext._tar && tpar._tar && (tnext._tar.parentNode === tpar._tar)) {
      tpar._tar.insertBefore(tar._tar, tnext._tar);
    } else if (tnext && !tnext._tar && tpar._tar) {
      /*以下の処理は、_tarプロパティがない要素オブジェクトがあるため、それに対処するもの
       *use要素や実体参照などは_tarプロパティがないことに注意
       */
      while (tnext) {
        if (tnext._tar && (tnext._tar.parentNode === tpar._tar)) {
          tpar._tar.insertBefore(tar._tar, tnext._tar);
          isLast = false;
        } 
        tnext = tnext.nextSibling;
      }
      if (isLast) {
        tpar._tar.appendChild(tar._tar);
      }
    } else if (!tnext && tpar._tar) {
      tpar._tar.appendChild(tar._tar);      
    }
    tnext = tpar = isLast = null;
    tar.addEventListener("DOMNodeInsertedIntoDocument", function(evt) {
      var tar = evt.target, style = tar.ownerDocument.defaultView.getComputedStyle(tar, "");
      var fontSize = parseFloat(style.getPropertyValue("font-size"));
      tar.x1.baseVal._emToUnit(fontSize);
      tar.y1.baseVal._emToUnit(fontSize);
      tar.x2.baseVal._emToUnit(fontSize);
      tar.y2.baseVal._emToUnit(fontSize);
      //以下は、配列listそのものをCTMで座標変換していく処理
      var vi = tar.ownerDocument.documentElement, ctm = tar.getScreenCTM();
      var dat = "m ";
      var p = vi.createSVGPoint();
      p.x = tar.x1.baseVal.value;
      p.y = tar.y1.baseVal.value;
      var pmt = p.matrixTransform(ctm);
      dat += pmt.x+ " " +pmt.y+ " l ";
      p.x = tar.x2.baseVal.value;
      p.y = tar.y2.baseVal.value;
      pmt = p.matrixTransform(ctm);
      dat += pmt.x+ " " +pmt.y;
      p = pmt = null;
      //VMLに結び付けていく
      var ele = tar._tar, w = vi.width.baseVal.value, h = vi.height.baseVal.value;
      ele.path = dat;
      ele.coordsize = w + " " + h;
      NAIBU._setPaint(tar, ctm);
      delete tar._cacheMatrix;
      delete tar._currentStyle;
      evt = ele = tar = style = fontSize = dat = list = ctm = vi = w = h = null;
    }, false);
    evt = tar = null;
  }, false);
  return this;
};
SVGLineElement.constructor = SVGElement;
SVGLineElement.prototype = new SVGElement();

function SVGPolylineElement(_doc) {
  SVGElement.apply(this);
  this._tar = _doc.createElement("v:shape");
  _doc = null;
  //interface SVGAnimatedPoints
  /*readonly SVGPointList*/   this.animatedPoints = this.points = new SVGPointList();
  this.addEventListener("DOMAttrModified", function(evt){
    var tar = evt.target;
    if (evt.attrName === "points") {
      var tp = tar.points, par = tar.ownerDocument.documentElement;
      var list = evt.newValue.replace(/^\s+|\s+$/g, "").split(/[\s,]+/);
      for (var i=0, p, lili=list.length;i<lili;i+=2) {
        if (isNaN(list[i])) {
          --i;
          continue;
        }
        p = par.createSVGPoint();
        p.x = parseFloat(list[i]);
        p.y = parseFloat(list[i+1]);
        tp.appendItem(p);
      }
    }
    evt = tar = list = tp = par = p = null;
  }, false);
  this.addEventListener("DOMNodeInserted", function(evt){
    var tar = evt.target;
    if (evt.eventPhase === /*Event.BUBBLING_PHASE*/ 3) {
      return; //強制終了させる
    }
    var tnext = tar.nextSibling, tpar = tar.parentNode, isLast = true;
    if (tnext && tnext._tar && tpar._tar && (tnext._tar.parentNode === tpar._tar)) {
      tpar._tar.insertBefore(tar._tar, tnext._tar);
    } else if (tnext && !tnext._tar && tpar._tar) {
      /*以下の処理は、_tarプロパティがない要素オブジェクトがあるため、それに対処するもの
       *use要素や実体参照などは_tarプロパティがないことに注意
       */
      while (tnext) {
        if (tnext._tar && (tnext._tar.parentNode === tpar._tar)) {
          tpar._tar.insertBefore(tar._tar, tnext._tar);
          isLast = false;
        } 
        tnext = tnext.nextSibling;
      }
      if (isLast) {
        tpar._tar.appendChild(tar._tar);
      }
    } else if (!tnext && tpar._tar) {
      tpar._tar.appendChild(tar._tar);      
    }
    tnext = tpar = isLast = null;
    tar.addEventListener("DOMNodeInsertedIntoDocument", function(evt) {
      var tar = evt.target, tp = tar.points;
      //以下は、配列listそのものをCTMで座標変換していく処理
      var ctm = tar.getScreenCTM();
      for (var i=0, list = [], lili=tp.numberOfItems;i<lili;++i) {
        var p = tp.getItem(i);
        var pmt = p.matrixTransform(ctm);
        list[2*i] = pmt.x;
        list[2*i + 1] = pmt.y;
        p = pmt = null;
      }
      list.splice(2, 0, "l");
      var dat = "m" + list.join(" ") + "e";
      //VMLに結び付けていく
      var ele = tar._tar, vi = tar.ownerDocument.documentElement;
      var w = vi.width.baseVal.value, h = vi.height.baseVal.value;
      ele.path = dat;
      ele.coordsize = w + " " + h;
      NAIBU._setPaint(tar, ctm);
      delete tar._cacheMatrix;
      delete tar._currentStyle;
      evt = ele = tar = dat = list = ctm = w = h = null;
    }, false);
    evt = tar = null;
  }, false);
  return this;
};
SVGPolylineElement.constructor = SVGElement;
SVGPolylineElement.prototype = new SVGElement();

function SVGPolygonElement(_doc) {
  SVGElement.apply(this);
  this._tar = _doc.createElement("v:shape");
  _doc = null;
  //interface SVGAnimatedPoints
  /*readonly SVGPointList*/   this.animatedPoints = this.points = new SVGPointList();
  this.addEventListener("DOMAttrModified", function(evt){
    var tar = evt.target;
    if (evt.attrName === "points") {
      var tp = tar.points, par = tar.ownerDocument.documentElement;
      var list = evt.newValue.replace(/^\s+|\s+$/g, "").split(/[\s,]+/);
      for (var i=0, p, lili=list.length;i<lili;i+=2) {
        if (isNaN(list[i])) {
          --i;
          continue;
        }
        p = par.createSVGPoint();
        p.x = parseFloat(list[i]);
        p.y = parseFloat(list[i+1]);
        tp.appendItem(p);
      }
    }
    evt = tar = list = tp = par = p = null;
  }, false);
  this.addEventListener("DOMNodeInserted", function(evt){
    if (evt.eventPhase === /*Event.BUBBLING_PHASE*/ 3) {
      return; //強制終了させる
    }
    var tar = evt.target;
    var tnext = tar.nextSibling, tpar = tar.parentNode;
    if (tnext && !!tpar._tar) {
      if (!!!tnext._tar) {
        /*以下の処理は、_tarプロパティがない要素オブジェクトがあるため、それに対処するもの
         *use要素や実体参照などは_tarプロパティがないことに注意
         */
        var isLast = true;
        while (tnext) {
          if (!!tnext._tar) {
            tpar._tar.insertBefore(tar._tar, tnext._tar);
            isLast = false;
          }          
          tnext = tnext.nextSibling;
        }
        if (isLast) {
          tpar._tar.appendChild(tar._tar);
        }
        isLast = null;
      } else {
        tpar._tar.insertBefore(tar._tar, tnext._tar);
      }
    } else if (!!tpar._tar){
      tpar._tar.appendChild(tar._tar);
    }
    tnext = tpar = null;
    tar.addEventListener("DOMNodeInsertedIntoDocument", function(evt) {
      var tar = evt.target, tp = tar.points;
      //以下は、配列listそのものをCTMで座標変換していく処理
      var ctm = tar.getScreenCTM();
      for (var i=0, list = [], lili=tp.numberOfItems;i<lili;++i) {
        var p = tp.getItem(i);
        var pmt = p.matrixTransform(ctm);
        list[2*i] = pmt.x;
        list[2*i + 1] = pmt.y;
        p = pmt = null;
      }
      list.splice(2, 0, "l");
      var dat = "m" + list.join(" ") + "x e";
      //VMLに結び付けていく
      var ele = tar._tar, vi = tar.ownerDocument.documentElement;
      var w = vi.width.baseVal.value, h = vi.height.baseVal.value;
      ele.path = dat;
      ele.coordsize = w + " " + h;
      NAIBU._setPaint(tar, ctm);
      delete tar._cacheMatrix;
      delete tar._currentStyle;
      evt = ele = tar = dat = list = ctm = w = h = null;
    }, false);
    evt = tar = null;
  }, false);
  return this;
};
SVGPolygonElement.constructor = SVGElement;
SVGPolygonElement.prototype = new SVGElement();

function SVGTextContentElement(_doc) { 
  SVGElement.apply(this);
  /*readonly SVGAnimatedLength*/      this.textLength = new SVGAnimatedLength();
  /*readonly SVGAnimatedEnumeration*/ this.lengthAdjust = new SVGAnimatedEnumeration(SVGTextContentElement.LENGTHADJUST_UNKNOWN);
  this.addEventListener("DOMNodeInserted", function(evt){
    var tar = evt.target, cur = evt.currentTarget;
    /*Bubblingフェーズの時にはもう、div要素をDOMツリーに挿入しておく必要があるため、
     *あらかじめ、Capturingフェーズで処理しておく
     */
    if ((evt.eventPhase === Event.CAPTURING_PHASE) && (tar.localName === "a") && (tar.namespaceURI === "http://www.w3.org/2000/svg") && tar.firstChild) {
      /*a要素の場合はtarをすりかえておく*/
      tar = tar.firstChild;
    }
    if ((evt.eventPhase === Event.CAPTURING_PHASE) && (tar.nodeType === Node.TEXT_NODE) && !!!tar._tars) {
      /*Textノードにdiv要素を格納したリストをプロパティとして蓄えておく*/
      tar._tars = [];
      var data = tar.data.replace(/^\s+/, "").replace(/\s+$/, "");
      tar.data = data;
      data = data.split('');
      for (var i=0, tdli=data.length;i<tdli;++i) {
        var d = _doc.createElement("div"), dstyle = d.style;
        dstyle.position = "absolute";
        dstyle.marginLeft = dstyle.marginRight = dstyle.marginTop = "0px";
        dstyle.paddingTop = dstyle.paddingLeft = "0px";
        dstyle.whiteSpace = "nowrap";
        dstyle.textIndent = "0px";
        d.appendChild(_doc.createTextNode(data[i]));
        tar._tars[tar._tars.length] = d;
      }
      data = null;
      cur._length += tar._tars.length;
    } else if ((evt.eventPhase === Event.CAPTURING_PHASE) && (tar instanceof SVGTextContentElement) && !!!tar._tars) {
      cur._length += tar._length;
    }
    evt = tar = cur = null;
  }, true);
 return this;
};

(function(t) {
t.constructor = SVGElement;
t.prototype = new SVGElement();
    // lengthAdjust Types
  /*unsigned short*/ t.LENGTHADJUST_UNKNOWN           = 0;
  /*unsigned short*/ t.LENGTHADJUST_SPACING           = 1;
  /*unsigned short*/ t.LENGTHADJUST_SPACINGANDGLYPHS  = 2;
  t.prototype._list = null;         //文字の位置を格納しておくリストのキャッシュ
  t.prototype._length = 0;          //全文字数
  t.prototype._stx = t.prototype._sty = 0; //初めの文字の位置
  t.prototype._chars = 0;           //tspan要素が全体の何文字目から始まっているか
  t.prototype._isYokogaki = true;          //横書きかどうか
/*long*/     t.prototype.getNumberOfChars = function() {
  return (this._length);
};
/*float*/    t.prototype.getComputedTextLength = function() {
  var l = this.textLength.baseVal;
  if ((l.value === 0) && (this.getNumberOfChars() > 0)) {
    /*何も設定されていない場合のみ、初期化を行う*/
    l.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_NUMBER, this.getSubStringLength(0, this.getNumberOfChars()));
  }
  l = null;
  return (this.textLength.baseVal.value);
};
/*getSubStringLengthメソッド
 *charnum番目の文字からnchars+charnum-1番目までの文字列の長さを求めて返す
 */
/*float*/    t.prototype.getSubStringLength = function(/*unsigned long*/ charnum, /*unsigned long*/ nchars ) {
  if (nchars === 0) {
    return 0;
  }
  var tg = this.getNumberOfChars();
  if (tg < (nchars+charnum)) {
    /*ncharsが文字列の長さよりも長くなってしまったときには、
     *文字列の末端までの長さを求めるとする（SVG1.1の仕様より）
     */
    nchars = tg - charnum + 1;
  }
  var end = this.getEndPositionOfChar(nchars+charnum-1), st = this.getStartPositionOfChar(charnum);
  if (this._isYokogaki) {
    var s = end.x - st.x;
  } else {
    var s = end.y - st.y;
  }
  tg = end = st = null;
  return s;
}
/*SVGPoint*/ t.prototype.getStartPositionOfChar = function (/*unsigned long*/ charnum ) {
  if (charnum > this.getNumberOfChars() || charnum < 0) {
    throw (new DOMException(DOMException.INDEX_SIZE_ERR));
  } else {
    var tar = this,
        ti = tar.firstChild,
        tp = tar.parentNode;
    if (!!!tar._list) {
      tar._list = [];
      var chars = tar._chars, //現在、何文字目にあるのか
          x = tar._stx, y = tar._sty, n = 0, //現在のテキスト位置と順番
          style = tar.ownerDocument.defaultView.getComputedStyle(tar, null),
          isYokogaki = ((style.getPropertyValue("writing-mode")) === "lr-tb") ? true : false,
          fontSize = parseFloat(style.getPropertyValue("font-size")),
          tx = tar.x.baseVal, ty = tar.y.baseVal, tdx = tar.dx.baseVal, tdy = tar.dy.baseVal;
      /*親要素の属性も参照しておく*/
      if (tp && ((tp.localName === "text") ||(tp.localName === "tspan"))) {
        var ptx = tp.x.baseVal,
            pty = tp.y.baseVal,
            ptdx = tp.dx.baseVal,
            ptdy = tp.dy.baseVal;
      } else {
        var ptx = pty = ptdx = ptdy = {numberOfItems : 0};
      }
      var kern = "f ijltIr.,:;'-\"()",
          akern = "1234567890abcdeghknopquvxyz",
          tt, alm, tdc, tcca, p, almx, almy, tlist, tg;
      if (isYokogaki && (tar.localName === "text")) {
        y += fontSize * 0.2;
      } else if (tar.localName === "text"){
        x -= fontSize * 0.5;
      }
      while (ti) {
        if (ti.nodeType === Node.TEXT_NODE) {
          tt = ti._tars;
          /*tspan要素のx属性で指定された座標の個数よりも、文字数が多い場合は、祖先（親）のx属性を
           *使う。また、属性が指定されていないときも同様に祖先や親を使う。
           *もし、仮に祖先や親がx属性を指定されていなければ、現在のテキスト位置（変数xに格納している）を使う。
           *この処理はdx属性やdy、y属性でも同様とする
           *参照資料SVG1.1 Text
           *http://www.hcn.zaq.ne.jp/___/REC-SVG11-20030114/text.html
           *
           *注意:ここでは、tspan要素だけではなく、text要素にも適用しているが、本来はtspan要素のみに処理させること
           */
          for (var i=0, tli=tt.length;i<tli;++i) {
            if (n < ptx.numberOfItems - chars) {
              x = ptx.getItem(n).value;
              if (!isYokogaki) {
                x -= fontSize * 0.5;
              }
            } else if (n < tx.numberOfItems) {
              x = tx.getItem(n).value;
              if (!isYokogaki) {
                x -= fontSize * 0.5;
              }
            }
            if (n < pty.numberOfItems - chars) {
              y = pty.getItem(n).value;
              if (isYokogaki) {
                y += fontSize * 0.2;
              }
            } else if (n < ty.numberOfItems) {
              y = ty.getItem(n).value;
              if (isYokogaki) {
                y += fontSize * 0.2;
              }
            }
            if (n < ptdx.numberOfItems - chars) {
              x += ptdx.getItem(n).value;
            } else if (n < tdx.numberOfItems) {
              x += tdx.getItem(n).value;
            }
            if (n < ptdy.numberOfItems - chars) {
              y += ptdy.getItem(n).value;
            } else if (n < tdy.numberOfItems) {
              y += tdy.getItem(n).value;
            }
            alm = 0;
            if (isYokogaki) {
              //カーニングを求めて、字の幅を文字ごとに調整する
              tdc = ti.data.charAt(i);
              if (kern.indexOf(tdc) > -1) {
                alm = fontSize * 0.68;
              } else if (tdc === "s"){
                alm = fontSize * 0.52;
              } else if ((tdc === "C") || (tdc === "D") || (tdc === "M") || (tdc === "W") || (tdc === "G") || (tdc === "m")){
                alm = fontSize * 0.2;
              } else if (akern.indexOf(tdc) > -1){
                alm = fontSize * 0.45;
              } else {
                alm = fontSize * 0.3;
              }
              tcca = tdc.charCodeAt(0);
              if ((12288 <= tcca) && (tcca <= 65533)) {
                alm = -fontSize * 0.01;
                if ((tdc === "う") || (tdc === "く") || (tdc === "し") || (tdc === "ち")) {
                  alm += fontSize * 0.2;
                }
              }
            }
            tlist = tar._list;
            tlist[tlist.length] = x;
            tlist[tlist.length] = y;
            tlist[tlist.length] = fontSize - alm;
            if (isYokogaki) {
              x += fontSize;
              x -= alm;
            } else {
              y += fontSize;
            }
            ++n;
          }
          chars += tli;
          if (ti.parentNode && (ti.parentNode.localName === "a")) { //a要素が親である場合は、tiを親に戻しておく
            ti = ti.parentNode;
          }
          ti = ti.nextSibling;
        } else if ((ti.localName === "tspan") && (ti.namespaceURI === "http://www.w3.org/2000/svg") && ti.firstChild) {
          /*現在のテキスト位置（x,y）の分だけ、tspan要素をずらしておく。
           *さらに、現在のテキスト位置を更新する
           */
          ti._stx = x;
          ti._sty = y;
          ti._chars = chars;
          p = ti.getStartPositionOfChar(ti.getNumberOfChars());
          almx = 0;
          almy = 0;
          if (isYokogaki) {
            almx = ti._list[ti._list.length-1];
          } else {
            almy = ti._list[ti._list.length-1];
          }
          x = ti._list[ti._list.length-3] + almx;
          y = ti._list[ti._list.length-2] + almy;
          tar._list = tar._list.concat(ti._list);
          tg = ti.getNumberOfChars();
          n += tg;
          chars += tg;
          ti = ti.nextSibling;
        } else if ((ti.localName === "a") && (ti.namespaceURI === "http://www.w3.org/2000/svg") && ti.firstChild) {
          /*a要素のテキストノードも処理する*/
          ti = ti.firstChild;
        } else {
          ti = ti.nextSibling;
        }
      }
      tar._isYokogaki = isYokogaki //getEndPositionOfCharメソッドなどで使う
    }
    tar = ti = tp = ptx = pty = tx = ty = chars = style = x = y = isYokogaki = kern = akern = tt = alm = tdc = tcca = p = almx = almy = tlist = tg = null;
    var s = this.ownerDocument.documentElement.createSVGPoint();
    s.x = this._list[charnum*3];
    s.y = this._list[charnum*3 + 1];
    s = s.matrixTransform(this.getScreenCTM());
    return s;
  }
};
/*SVGPoint*/ t.prototype.getEndPositionOfChar = function(/*unsigned long*/ charnum ) {
  if (charnum > this.getNumberOfChars() || charnum < 0) {
    throw (new DOMException(DOMException.INDEX_SIZE_ERR));
  } else {
    var s = this.getStartPositionOfChar(charnum);
    //アドバンス値（すなわちフォントの大きさ）をCTMの行列式を用いて、算出する
    var n = this._list[charnum*3 + 2] * Math.sqrt(Math.abs(this.getScreenCTM()._determinant()));
    if (this._isYokogaki) {
      s.x += n;
    } else {
      s.y += n;
    }
    return s;
  }
};
/*SVGRect*/  t.prototype.getExtentOfChar = function(/*unsigned long*/ charnum ) {
  
};
/*float*/    t.prototype.getRotationOfChar = function(/*unsigned long*/ charnum ) {
  
};
/*long*/     t.prototype.getCharNumAtPosition = function(/*SVGPoint*/ point ) {
  
};
/*void*/     t.prototype.selectSubString = function(/*unsigned long*/ charnum,/*unsigned long*/ nchars ) {
  
};
})(SVGTextContentElement);

function SVGTextPositioningElement(_doc) { 
  SVGTextContentElement.apply(this, arguments);
  /*readonly SVGAnimatedLengthList*/ this.x = new SVGAnimatedLengthList();
  /*readonly SVGAnimatedLengthList*/ this.y = new SVGAnimatedLengthList();
  /*readonly SVGAnimatedLengthList*/ this.dx = new SVGAnimatedLengthList();
  /*readonly SVGAnimatedLengthList*/ this.dy = new SVGAnimatedLengthList();
  /*readonly SVGAnimatedNumberList*/ this.rotate = new SVGAnimatedNumberList();
  this.addEventListener("DOMAttrModified", function(evt){
    var tar = evt.target, name = evt.attrName, tod = tar.ownerDocument.documentElement;
    var _parseFloat = parseFloat;
    if ((name === "x") || (name === "y") || (name === "dx") || (name === "dy")) {
      var enr = evt.newValue.replace(/^\s+|\s+$/g, "").split(/[\s,]+/), teas = tar[name].baseVal;
      for (var i=0, tli=enr.length;i<tli;++i) {
        var tea = tod.createSVGLength();
        var n = enr[i].match(/\D+$/), type = 0;
        if (!!n) {
          n = n[0];
        }
        if (!n) {
          type = SVGLength.SVG_LENGTHTYPE_NUMBER;
        } else if (n === "%") {
          if ((name === "x") || (name === "dx")) {
            tea._percent *= tod.viewport.width;
          } else if ((name === "y") || (name === "dy")) {
            tea._percent *= tod.viewport.height;
          }
          type = SVGLength.SVG_LENGTHTYPE_PERCENTAGE;
        } else if (n === "em") {
          var style = tar.ownerDocument.defaultView.getComputedStyle(tar, null);
          tea._percent *= _parseFloat(style.getPropertyValue("font-size"));
          style = null;
          type = SVGLength.SVG_LENGTHTYPE_EMS;
        } else if (n === "ex") {
          type = SVGLength.SVG_LENGTHTYPE_EXS;
        } else if (n === "px") {
          type = SVGLength.SVG_LENGTHTYPE_PX;
        } else if (n === "cm") {
          type = SVGLength.SVG_LENGTHTYPE_CM;
        } else if (n === "mm") {
          type = SVGLength.SVG_LENGTHTYPE_MM;
        } else if (n === "in") {
          type = SVGLength.SVG_LENGTHTYPE_IN;
        } else if (n === "pt") {
          type = SVGLength.SVG_LENGTHTYPE_PT;
        } else if (n === "pc") {
          type = SVGLength.SVG_LENGTHTYPE_PC;
        }
        var s = _parseFloat(enr[i]);
        s = isNaN(s) ? 0 : s;
        tea.newValueSpecifiedUnits(type, s);
        teas.appendItem(tea);
      }
      tar._list = null;
    }
    evt = tar = null;
  }, false);
  this.addEventListener("DOMNodeInserted", function(evt){
    if (evt.eventPhase === /*Event.BUBBLING_PHASE*/ 3) {
      var tar = evt.target;
      if (tar.nodeType !== Node.TEXT_NODE) {
        tar._list = null;
        evt.currentTarget._list = null;
      }
      evt = tar = null;
    }
  }, false);
  return this;
};
SVGTextPositioningElement.constructor = SVGTextContentElement;
SVGTextPositioningElement.prototype = new SVGTextContentElement();

function SVGTextElement(_doc) {
  SVGTextPositioningElement.apply(this, arguments);
  this._tar = _doc.createElement("v:group");
  this.addEventListener("DOMNodeInserted", function(evt){
    if (evt.eventPhase === /*Event.BUBBLING_PHASE*/ 3) {
      return; //強制終了させる
    }
    var tar = evt.target,
        tnext = tar.nextSibling,
        tpar = tar.parentNode,
        isLast = true;
    if (tnext && tnext._tar && tpar._tar && (tnext._tar.parentNode === tpar._tar)) {
      tpar._tar.insertBefore(tar._tar, tnext._tar);
    } else if (tnext && !tnext._tar && tpar._tar) {
      /*以下の処理は、_tarプロパティがない要素オブジェクトがあるため、それに対処するもの
       *use要素や実体参照などは_tarプロパティがないことに注意
       */
      while (tnext) {
        if (tnext._tar && (tnext._tar.parentNode === tpar._tar)) {
          tpar._tar.insertBefore(tar._tar, tnext._tar);
          isLast = false;
        } 
        tnext = tnext.nextSibling;
      }
      if (isLast) {
        tpar._tar.appendChild(tar._tar);
      }
    } else if (!tnext && tpar._tar) {
      tpar._tar.appendChild(tar._tar);      
    }
    tnext = tpar = isLast = null;
    tar.addEventListener("DOMNodeInsertedIntoDocument", function(evt) {
      var tar = evt.target,
          ti = tar.firstChild,
          ttp = tar._tar,
          style = tar.ownerDocument.defaultView.getComputedStyle(tar, null),
          n = parseFloat(style.getPropertyValue("font-size")) * Math.sqrt(Math.abs(tar.getScreenCTM()._determinant())),
          tod = tar.ownerDocument.documentElement,
          ttpc = ttp, //ttpcはttpのキャッシュ
          tlen = tar.getComputedTextLength(),
          anchor = style.getPropertyValue("text-anchor"),
          tedeco = style.getPropertyValue("text-decoration"), //text-decorationは継承しないので、個々に設定する
          ttps = ttp.style;
      style._setCSSText();
      ttps.cssText = style.cssText;
      ttps.fontSize = n + "px";
      ttps.fontFamily = style.getPropertyValue("font-family");
      /*ここでの変数jは前回ノードまでの総文字数*/
      for (var i=0, j=0, tli=tar.getNumberOfChars();i<tli;++i) {
        if (ti) {
          if (!!ti._tars && (ti._tars.length !== 0)) {
            var ij = (i > j) ? i - j : j - i
            var sty = ti._tars[ij].style,
                p = tar.getStartPositionOfChar(i);
            sty.position = "absolute";
            if (tar._isYokogaki) {
              if (anchor === "middle") {
                p.x -= tlen / 2;
              } else if (anchor === "end") {
                p.x -= tlen;
              }
            } else {
              if (anchor === "middle") {
                p.y -= tlen / 2;
              } else if (anchor === "end") {
                p.y -= tlen;
              }
            }
            sty.left = p.x + "px";
            sty.top = p.y + "px";
            sty.width = "0px";
            sty.height = "0px";
            sty.marginTop = tar._isYokogaki ? -n-5+ "px" : "-5px";
            sty.lineHeight = n+10+ "px";
            sty.textDecoration = tedeco;
            ttp.appendChild(ti._tars[ij]);
            sty = p = null;
          }
          if (ti.nodeName === "#text") {
            if ((ti.data.length+j) <= i+1) { //テキストノード内の文字をすべて処理し終えれば
              j = j + ti.data.length;
              if (ti.parentNode.localName === "a") {
                ti =  ti.parentNode;
                ttp = ttpc;
              }
              ti = ti.nextSibling;
            }
          } else if (!!ti.getNumberOfChars) {
              if ((ti.getNumberOfChars()+j) <= i+1) {
                j = j + ti.getNumberOfChars();
                ti = ti.nextSibling;
              }
          } else if ((ti.localName === "a") && (ti.namespaceURI === "http://www.w3.org/2000/svg") && ti.firstChild) {
            ttp = ti._tar;
            ti = ti.firstChild;
            i-=2;
          }
        }
      }
      var color = style.getPropertyValue("fill"),
          cursor = style.getPropertyCSSValue("cursor"),
          vis = style.getPropertyCSSValue("visibility"),
          disp = style.getPropertyCSSValue("display"),
          tts = tar._tar.style;
      if (color === "none"){
        tts.color = "transparent";
      } else if (color.indexOf("url") === -1) {
        tts.color = color;
      } else {
        tts.color = "black";
      }
      if (cursor && !cursor._isDefault) { //初期値でないならば
        var tc = cursor.cssText;
        tts.cursor = tc.substring(tc.indexOf(":")+1, tc.length);
        tc = null;
      }
      if (vis　&& !vis._isDefault) {
        tts.visibility = vis.cssText.substring(vis.cssText.indexOf(":")+1, vis.cssText.length);
      }
       if (disp && !disp._isDefault && (disp.cssText.indexOf("none") > -1)) {
        tts.display = "none";
           　} else if (disp && !disp._isDefault) {
        tts.display = "block";
      }
      if ((tar.x.baseVal.numberOfItems === 1) && (tar.y.baseVal.numberOfItems === 1)
          && tar._isYokogaki && (tar.firstChild.nodeName === "#text")) {
        /*xとy属性が一つの値しか取らないとき、字詰めの処理をすべてブラウザに任せておく。
         *以下では、他のdiv要素のテキストをすべて、最初のdiv要素にまとめている
         */
        var tft = tar.firstChild._tars;
        for (var i=1, tli=tft.length;i<tli;++i) {
          tft[0].innerText += tft[i].innerText;
          tft[i].style.display = "none";
        }
      }
      var isRect = true;
      if (ttp.lastChild) {
        if (ttp.lastChild.nodeName !== "rect") {
          isRect = false;
        }
      } else {
        isRect = false;
      }
      if (!isRect) {
        var backr = _doc.createElement("v:rect"),
            backrs = backr.style; //ずれを修正するためのもの
        backrs.width = backrs.height = "1px";
        backrs.left = backrs.top = "0px";
        backr.stroked = backr.filled = "false";
        ttp.appendChild(backr);
      }
      delete tar._cacheMatrix;
      delete tar._currentStyle;
      isRect = evt = tar = style = tedeco = tpp = ttpc = style = color = cursor = disp = vis = ttps = backr = backrs = null;
    }, false);
    evt = tar = null;
  },false);
  return this;
};
SVGTextElement.constructor = SVGTextPositioningElement;
SVGTextElement.prototype = new SVGTextPositioningElement();

function SVGTSpanElement() {
  SVGTextElement.apply(this, arguments);
  return this;
};
SVGTSpanElement.constructor = SVGTextPositioningElement;
SVGTSpanElement.prototype = new SVGTextPositioningElement();

function SVGTRefElement() {
  SVGTextPositioningElement.apply(this, arguments);
  SVGURIReference.apply(this, arguments);
  return this;
};
SVGTRefElement.constructor = SVGTextPositioningElement;
SVGTRefElement.prototype = new SVGTextPositioningElement();

function SVGTextPathElement() { 
  SVGTextContentElement.apply(this, arguments);
  /*readonly SVGAnimatedLength*/      this.startOffset;
  /*readonly SVGAnimatedEnumeration*/ this.method;
  /*readonly SVGAnimatedEnumeration*/ this.spacing;
  SVGURIReference.apply(this, arguments);
  return this;
};
SVGTextPathElement.constructor = SVGTextContentElement;
SVGTextPathElement.prototype = new SVGTextContentElement();

(function(t){
    // textPath Method Types
  /*unsigned short*/ t.TEXTPATH_METHODTYPE_UNKNOWN   = 0;
  /*unsigned short*/ t.TEXTPATH_METHODTYPE_ALIGN     = 1;
  /*unsigned short*/ t.TEXTPATH_METHODTYPE_STRETCH     = 2;
    // textPath Spacing Types
  /*unsigned short*/ t.TEXTPATH_SPACINGTYPE_UNKNOWN   = 0;
  /*unsigned short*/ t.TEXTPATH_SPACINGTYPE_AUTO     = 1;
  /*unsigned short*/ t.TEXTPATH_SPACINGTYPE_EXACT     = 2;
})(SVGTextPathElement);

function SVGAltGlyphElement() { 
  SVGTextPositioningElement.apply(this, arguments);
  /*DOMString*/ this.glyphRef;
  /*DOMString*/ this.format;
  SVGURIReference.apply(this, arguments);
  return this;
};
SVGAltGlyphElement.constructor = SVGTextPositioningElement;
SVGAltGlyphElement.prototype = new SVGTextPositioningElement();

function SVGAltGlyphDefElement() {
  SVGElement.apply(this, arguments);
  return this;
};
SVGAltGlyphDefElement.constructor = SVGElement;
SVGAltGlyphDefElement.prototype = new SVGElement();

function SVGAltGlyphItemElement() {
  SVGElement.apply(this, arguments);
  return this;
};
SVGAltGlyphItemElement.constructor = SVGElement;
SVGAltGlyphItemElement.prototype = new SVGElement();

function SVGGlyphRefElement() { 
  SVGElement.apply(this, arguments);
  /*DOMString*/ this.glyphRef;
  /*DOMString*/ this.format;
  /*float*/    this.x;
  /*float*/    this.y;
  /*float*/    this.dx;
  /*float*/    this.dy;
  SVGURIReference.apply(this, arguments);
  return this;
};
SVGGlyphRefElement.constructor = SVGElement;
SVGGlyphRefElement.prototype = new SVGElement();

function SVGPaint() { 
  SVGColor.apply(this, arguments);
  /*readonly unsigned short*/ this.paintType = SVGPaint.SVG_PAINTTYPE_UNKNOWN;
  /*readonly DOMString*/      this.uri = null;
  return this;
};

(function(t){
t.constructor = SVGColor;
t.prototype = new SVGColor();
    // Paint Types
  /*unsigned short*/ t.SVG_PAINTTYPE_UNKNOWN               = 0;
  /*unsigned short*/ t.SVG_PAINTTYPE_RGBCOLOR              = 1;
  /*unsigned short*/ t.SVG_PAINTTYPE_RGBCOLOR_ICCCOLOR     = 2;
  /*unsigned short*/ t.SVG_PAINTTYPE_NONE                  = 101;
  /*unsigned short*/ t.SVG_PAINTTYPE_CURRENTCOLOR          = 102;
  /*unsigned short*/ t.SVG_PAINTTYPE_URI_NONE              = 103;
  /*unsigned short*/ t.SVG_PAINTTYPE_URI_CURRENTCOLOR      = 104;
  /*unsigned short*/ t.SVG_PAINTTYPE_URI_RGBCOLOR          = 105;
  /*unsigned short*/ t.SVG_PAINTTYPE_URI_RGBCOLOR_ICCCOLOR = 106;
  /*unsigned short*/ t.SVG_PAINTTYPE_URI                   = 107;
/*void*/ t.prototype.setUri = function(/*DOMString*/ uri ) {
  this.setPaint(SVGPaint.SVG_PAINTTYPE_URI_NONE, uri, null, null);
};
/*void*/ t.prototype.setPaint = function(/*unsigned short*/ paintType, /*DOMString*/ uri, /*DOMString*/ rgbColor, /*DOMString*/ iccColor ) {
  if ((paintType < 101 && uri) || (paintType > 102 && !uri)) {
    throw new SVGException(SVGException.SVG_INVALID_VALUE_ERR);
  }
  this.uri = uri;
  this.paintType = paintType;
  if (paintType === SVGPaint.SVG_PAINTTYPE_CURRENTCOLOR) {
    paintType = SVGColor.SVG_COLORTYPE_CURRENTCOLOR;
  }
  this.setColor(paintType, rgbColor, iccColor); //SVGColorのsetColorメソッドを用いる
};
//                    raises( SVGException );
t = null;
})(SVGPaint);

function SVGMarkerElement(){ 
  SVGElement.apply(this, arguments);
  /*readonly SVGAnimatedLength*/      this.refX = new SVGAnimatedLength();
  /*readonly SVGAnimatedLength*/      this.refY = new SVGAnimatedLength();
  /*readonly SVGAnimatedEnumeration*/ this.markerUnits = new SVGAnimatedEnumeration();
  /*readonly SVGAnimatedLength*/      this.markerWidth = new SVGAnimatedLength();
  /*readonly SVGAnimatedLength*/      this.markerHeight = new SVGAnimatedLength();
  /*readonly SVGAnimatedEnumeration*/ this.orientType = new SVGAnimatedEnumeration();
  /*readonly SVGAnimatedAngle*/       this.orientAngle = new SVGAnimatedAngle();
    //SVGFitToViewBoxのインターフェースを用いる
  /*readonly SVGAnimatedRect*/   this.viewBox = new SVGAnimatedRect();
  /*readonly SVGAnimatedPreserveAspectRatio*/ this.preserveAspectRatio = new SVGAnimatedPreserveAspectRatio();
  /*unsigned short*/             this.zoomAndPan = SVGZoomAndPan.SVG_ZOOMANDPAN_DISABLE;
  return this;
};
(function(t){
    // Marker Unit Types
  /*unsigned short*/ t.SVG_MARKERUNITS_UNKNOWN        = 0;
  /*unsigned short*/ t.SVG_MARKERUNITS_USERSPACEONUSE = 1;
  /*unsigned short*/ t.SVG_MARKERUNITS_STROKEWIDTH    = 2;
    // Marker Orientation Types
  /*unsigned short*/ t.SVG_MARKER_ORIENT_UNKNOWN      = 0;
  /*unsigned short*/ t.SVG_MARKER_ORIENT_AUTO         = 1;
  /*unsigned short*/ t.SVG_MARKER_ORIENT_ANGLE        = 2;
t.constructor = SVGElement;
t.prototype = new SVGElement();
/*void*/ t.prototype.setOrientToAuto = function() {
  
};
/*void*/ t.prototype.setOrientToAngle = function(/*SVGAngle*/ angle ) {
  
};
})(SVGMarkerElement);
function SVGColorProfileElement() { 
  SVGElement.apply(this);
  /*DOMString*/      this._local;
                         // raises DOMException on setting
                       // (NOTE: is prefixed by "_"
                       // as "local" is an IDL keyword. The
                       // prefix will be removed upon processing)
  /*DOMString*/      this.name;
  /*unsigned short*/ this.renderingIntent;
  SVGURIReference.apply(this, arguments);
  return this;
};
SVGColorProfileElement.constructor = SVGElement;
SVGColorProfileElement.prototype = new SVGElement();

function SVGColorProfileRule() { 
  SVGCSSRule.apply(this);
  /*DOMString*/      this.src;
  /*DOMString*/      this.name;
  /*unsigned short*/ this.renderingIntent;
  return this;
};
SVGColorProfileRule.constructor = SVGCSSRule;
SVGColorProfileRule.prototype = new SVGCSSRule();

function SVGGradientElement() { 
  SVGElement.apply(this);
  SVGURIReference.apply(this);
  /*readonly SVGAnimatedEnumeration*/   this.gradientUnits = new SVGAnimatedEnumeration();
  /*readonly SVGAnimatedTransformList*/ this.gradientTransform = new SVGAnimatedTransformList();
  /*readonly SVGAnimatedEnumeration*/   this.spreadMethod = new SVGAnimatedEnumeration();
  this.addEventListener("DOMNodeInsertedIntoDocument", function(evt) {
    var grad = evt.target,
        ele = evt._tar,
        t = evt._style, //eleはv:fill要素やv:stroke要素のノード、tはラップした要素ノードのスタイルを収納
        grad2 = grad,
        href, stops, length,
        color = [],
        colors = [],
        opacity = [],
        stop, sstyle, ci;
    if (!ele || !grad) { //まだ、path要素などが設定されていない場合
      grad = ele = t = grad2 = href = stops = length = color = colors = opacity = null;
      return;
    }
    if (grad._instance) { //xlink言語で呼び出されたノードが_instanceに収納されているならば
      grad2 = grad._instance;
    }
    stops = grad2.getElementsByTagNameNS("http://www.w3.org/2000/svg", "stop");
    if (!stops) {
      ele = t = href = grad = grad2 = stops = color = colors = opacity = null;
      return;
    }
    length = stops.length;
    for (var i = 0; i < length; ++i) {
      stop = stops[i];
      sstyle = stop.ownerDocument.defaultView.getComputedStyle(stop, "");
      ci = sstyle.getPropertyCSSValue("stop-color");
      if (ci && (ci.colorType === /*SVGColor.SVG_COLORTYPE_CURRENTCOLOR*/ 3)) {
        /*再度、設定。css.jsのsetPropertyを参照*/
        sstyle.setProperty("color", sstyle.getPropertyValue("color"));
      }
      color[i] =  "rgb(" +ci.rgbColor.red.getFloatValue(1)+ "," +ci.rgbColor.green.getFloatValue(1)+ "," +ci.rgbColor.blue.getFloatValue(1)+ ")";
      colors[i] = stop.offset.baseVal + " " + color[i];
      opacity[i] = (sstyle.getPropertyValue("stop-opacity") || 1) * t.getPropertyValue("fill-opacity") * t.getPropertyValue("opacity");
    }
    ele["method"] = "none";
    ele["color"] = color[0];
    ele["color2"] = color[length-1];
    ele["colors"] = colors.join(",");
    // When colors attribute is used, the meanings of opacity and o:opacity2 are reversed.
    ele["opacity"] = opacity[length-1]+ "";
    ele["o:opacity2"] = opacity[0]+ "";
    /*SVGRadialGradientElementインターフェースで利用する*/
    grad._color = color;
    var gt = grad2.getAttributeNS(null, "gradientTransform");
    if (gt) {
      grad.setAttributeNS(null, "transform", gt);
    }
    grad = grad2 = ele = stops = length = color = colors = opacity = evt = t = href = stop = sstyle = ci = null;
  }, false);
  return this;
};
SVGGradientElement.constructor = SVGElement;
SVGGradientElement.prototype = new SVGElement();
    // Spread Method Types
  /*unsigned short*/ SVGGradientElement.SVG_SPREADMETHOD_UNKNOWN = 0;
  /*unsigned short*/ SVGGradientElement.SVG_SPREADMETHOD_PAD     = 1;
  /*unsigned short*/ SVGGradientElement.SVG_SPREADMETHOD_REFLECT = 2;
  /*unsigned short*/ SVGGradientElement.SVG_SPREADMETHOD_REPEAT  = 3;

function SVGLinearGradientElement() { 
  SVGGradientElement.apply(this, arguments);
  /*readonly SVGAnimatedLength*/ this.x1 = new SVGAnimatedLength();
  /*readonly SVGAnimatedLength*/ this.y1 = new SVGAnimatedLength();
  /*readonly SVGAnimatedLength*/ this.x2 = new SVGAnimatedLength();
  /*readonly SVGAnimatedLength*/ this.y2 = new SVGAnimatedLength();
  this.addEventListener("DOMNodeInsertedIntoDocument", function(evt) {
    var grad = evt.target, ele = evt._tar, angle = 270;
    if (!!!ele) { //まだ、path要素などが設定されていない場合
      return;
    }
    var style = grad.ownerDocument.defaultView.getComputedStyle(grad, "");
    var fontSize = parseFloat(style.getPropertyValue("font-size"));
    grad.x1.baseVal._emToUnit(fontSize);
    grad.y1.baseVal._emToUnit(fontSize);
    grad.x2.baseVal._emToUnit(fontSize);
    grad.y2.baseVal._emToUnit(fontSize);
    angle = 270 - Math.atan2(grad.y2.baseVal.value-grad.y1.baseVal.value, grad.x2.baseVal.value-grad.x1.baseVal.value) * 180 / Math.PI;
    if (angle >= 360) {
      angle -= 360;
    }
    ele.setAttribute("type", "gradient");
    ele.setAttribute("angle", angle + "");
    evt = ele = grad = angle = style = fontSize = null;
  }, false);
  return this;
};
SVGLinearGradientElement.constructor = SVGGradientElement;
SVGLinearGradientElement.prototype = new SVGGradientElement();

function SVGRadialGradientElement(_doc) { 
  SVGGradientElement.apply(this);
  /*readonly SVGAnimatedLength*/ this.cx = new SVGAnimatedLength();
  /*readonly SVGAnimatedLength*/ this.cy = new SVGAnimatedLength();
  /*readonly SVGAnimatedLength*/ this.r = new SVGAnimatedLength();
  /*readonly SVGAnimatedLength*/ this.fx = new SVGAnimatedLength();
  /*readonly SVGAnimatedLength*/ this.fy = new SVGAnimatedLength();
  this.cx.baseVal.value = this.cy.baseVal.value = this.r.baseVal.value = 0.5;
  this.addEventListener("DOMNodeInsertedIntoDocument", function(evt) {
    var grad = evt.target, ele = evt._tar, tar = evt._ttar; //eleはv:fill要素。tarはターゲットとになる要素
    if (!!!ele) { //まだ、path要素などが設定されていない場合
      return;
    }
    ele.setAttribute("type", "gradientTitle");
    ele.setAttribute("focus", "100%");
    ele.setAttribute("focusposition", "0.5 0.5");
    if (tar.localName === "rect") {
      /*VMLでは、図の形状に沿って、円状のグラデーションを処理するようになっているため、
       *四角だとおかしな模様が出てしまう。以下はそれを避ける処理
       */
      var style = grad.ownerDocument.defaultView.getComputedStyle(tar, "");
      var fontSize = parseFloat(style.getPropertyValue("font-size"));
      grad.cx.baseVal._emToUnit(fontSize);
      grad.cy.baseVal._emToUnit(fontSize);
      grad.r.baseVal._emToUnit(fontSize);
      grad.fx.baseVal._emToUnit(fontSize);
      grad.fy.baseVal._emToUnit(fontSize);
      var cx = grad.cx.baseVal.value, cy = grad.cy.baseVal.value;
      var r = grad.r.baseVal.value, rx, ry;
      rx = ry = r;
      var tarrect = tar.getBBox();
      var vi = tar.ownerDocument.documentElement.viewport;
      var el = vi.width | 0, et = vi.height | 0, er = 0, eb = 0;
      var units = grad.getAttributeNS(null, "gradientUnits");
      if (!units || units === "objectBoundingBox") {
        //%の場合は小数点に変換(10% -> 0.1)
        cx = cx > 1 ? cx/100 : cx; cy = cy > 1 ? cy/100 : cy; r = r > 1 ? r/100 : r;
        //要素の境界領域を求める（四隅の座標を求める）
        var nx = tarrect.x, ny = tarrect.y, wid = tarrect.width, hei = tarrect.height;
        cx = cx*wid + nx; cy = cy*hei + ny; rx = r*wid; ry = r*hei;
        nx = ny = wid = hei = null;
      }
      var matrix = tar.getScreenCTM().multiply(grad.getCTM());
      el = cx - rx; et = cy - ry; er = cx + rx; eb = cy + ry;
      var rrx = rx * 0.55228, rry = ry * 0.55228;
      var list = ["m", cx,et, "c", cx-rrx,et, el,cy-rry, el,cy, el,cy+rry, cx-rrx,eb, cx,eb, cx+rrx,eb, er,cy+rry, er,cy, er,cy-rry, cx+rrx,et, cx,et, "x e"];
      for (var i = 0, lili = list.length; i < lili;) {
        if (isNaN(list[i])) { //コマンド文字は読み飛ばす
          ++i;
          continue;
        }
        var p = grad.ownerDocument.documentElement.createSVGPoint();
        p.x = parseFloat(list[i]);
        p.y = parseFloat(list[i+1]);
        var pmt = p.matrixTransform(matrix);
        list[i] = pmt.x;
        i++;
        list[i] = pmt.y;
        i++;
        p = pmt = null;
      }
      var ellipse = list.join(" ");
      var outline = _doc.getElementById("_NAIBU_outline");
      var background = _doc.createElement("div"), bstyle = background.style;
      bstyle.position = "absolute";
      bstyle.display = "inline-block";
      var w = vi.width, h = vi.height;
      bstyle.textAlign = "left"; bstyle.top = "0px"; bstyle.left = "0px"; bstyle.width = w+ "px"; bstyle.height = h+ "px";
      outline.appendChild(background);
      bstyle.filter = "progid:DXImageTransform.Microsoft.Compositor";
      background.filters.item('DXImageTransform.Microsoft.Compositor').Function = 23;
      var circle = '<v:shape style="display:inline-block; position:relative; antialias:false; top:0px; left:0px;" coordsize="' +w+ ' ' +h+ '" path="' +ellipse+ '" stroked="f">' +ele.outerHTML+ '</v:shape>';
      var data = tar._tar.path.value;
      background.innerHTML = '<v:shape style="display:inline-block; position:relative; top:0px; left:0px;" coordsize="' +w+ ' ' +h+ '" path="' +data+ '" stroked="f" fillcolor="' +grad._color[grad._color.length-1]+ '" ></v:shape>';
      background.filters[0].apply();
      background.innerHTML = circle;
      background.filters[0].play();
      tar._tar.parentNode.insertBefore(background, tar._tar);
      tar._tar.filled = "false";
      ellipse = outline = background = style = fontSize = bstyle = circle = data = list = gt = cx = cy = r = w = h = matrix = null;
    } else if (!ele.parentNode){
      tar._tar.appendChild(ele);
    }
    evt = tar = ele = gard = null;
  }, false);
  return this;
};
SVGRadialGradientElement.constructor = SVGGradientElement;
SVGRadialGradientElement.prototype = new SVGGradientElement();

function SVGStopElement() { 
  SVGElement.apply(this, arguments);
  /*readonly SVGAnimatedNumber*/ this.offset = new SVGAnimatedNumber();
  this.addEventListener("DOMAttrModified", function(evt) {
    if (evt.attrName === "offset") {
      evt.target.offset.baseVal = parseFloat(evt.newValue);
    }
    evt = null;
  }, false);
  return this;
};
SVGStopElement.constructor = SVGElement;
SVGStopElement.prototype = new SVGElement();

function SVGPatternElement() { 
  SVGElement.apply(this, arguments);
  /*readonly SVGAnimatedEnumeration*/   this.patternUnits = new SVGAnimatedEnumeration();
  /*readonly SVGAnimatedEnumeration*/   this.patternContentUnits = new SVGAnimatedEnumeration();
  /*readonly SVGAnimatedTransformList*/ this.patternTransform = new SVGAnimatedTransformList();
  /*readonly SVGAnimatedLength*/        this.x = new SVGAnimatedLength();
  /*readonly SVGAnimatedLength*/        this.y = new SVGAnimatedLength();
  /*readonly SVGAnimatedLength*/        this.width = new SVGAnimatedLength();
  /*readonly SVGAnimatedLength*/        this.height = new SVGAnimatedLength();
  SVGURIReference.apply(this, arguments);
    //SVGFitToViewBoxのインターフェースを用いる
  /*readonly SVGAnimatedRect*/   this.viewBox = new SVGAnimatedRect();
  /*readonly SVGAnimatedPreserveAspectRatio*/ this.preserveAspectRatio = new SVGAnimatedPreserveAspectRatio();
  /*unsigned short*/             this.zoomAndPan = SVGZoomAndPan.SVG_ZOOMANDPAN_DISABLE;
  return this;
};
SVGPatternElement.constructor = SVGElement;
SVGPatternElement.prototype = new SVGElement();

function SVGClipPathElement() { 
  SVGElement.apply(this, arguments);
  /*readonly SVGAnimatedEnumeration*/ this.clipPathUnits = new SVGAnimatedEnumeration();
  return this;
};
SVGClipPathElement.constructor = SVGElement;
SVGClipPathElement.prototype = new SVGElement();

function SVGMaskElement() { 
  SVGElement.apply(this, arguments);
  /*readonly SVGAnimatedEnumeration*/ this.maskUnits = new SVGAnimatedEnumeration();
  /*readonly SVGAnimatedEnumeration*/ this.maskContentUnits = new SVGAnimatedEnumeration();
  /*readonly SVGAnimatedLength*/      this.x = new SVGAnimatedLength();
  /*readonly SVGAnimatedLength*/      this.y = new SVGAnimatedLength();
  /*readonly SVGAnimatedLength*/      this.width = new SVGAnimatedLength();
  /*readonly SVGAnimatedLength*/      this.height = new SVGAnimatedLength();
  return this;
};
SVGMaskElement.constructor = SVGElement;
SVGMaskElement.prototype = new SVGElement();

function SVGFilterElement() { 
  SVGElement.apply(this, arguments);
  /*readonly SVGAnimatedEnumeration*/ this.filterUnits = new SVGAnimatedEnumeration();
  /*readonly SVGAnimatedEnumeration*/ this.primitiveUnits = new SVGAnimatedEnumeration();
  /*readonly SVGAnimatedLength*/      this.x = new SVGAnimatedLength();
  /*readonly SVGAnimatedLength*/      this.y = new SVGAnimatedLength();
  /*readonly SVGAnimatedLength*/      this.width = new SVGAnimatedLength();
  /*readonly SVGAnimatedLength*/      this.height = new SVGAnimatedLength();
  /*readonly SVGAnimatedInteger*/     this.filterResX = new SVGAnimatedInteger();
  /*readonly SVGAnimatedInteger*/     this.filterResY = new SVGAnimatedInteger();
  SVGURIReference.apply(this, arguments);
  //setFilterRes (/*unsigned long*/ filterResX,/*unsigned long*/ filterResY );
  return this;
};
SVGFilterElement.constructor = SVGElement;
SVGFilterElement.prototype = new SVGElement();

function SVGFilterPrimitiveStandardAttributes(ele) { 
  SVGStylable.apply(this, arguments);
  this._tar = ele;
  /*readonly SVGAnimatedLength*/ this.x = new SVGAnimatedLength();
  /*readonly SVGAnimatedLength*/ this.y = new SVGAnimatedLength();
  /*readonly SVGAnimatedLength*/ this.width = new SVGAnimatedLength();
  /*readonly SVGAnimatedLength*/ this.height = new SVGAnimatedLength();
  /*readonly SVGAnimatedString*/ this.result = new SVGAnimatedLength();
  };
SVGFilterPrimitiveStandardAttributes.constructor = SVGStylable;
SVGFilterPrimitiveStandardAttributes.prototype = new SVGStylable();

function SVGFEBlendElement() {
  SVGElement.apply(this, arguments);
  /*readonly SVGAnimatedString*/      this.in1 = new SVGAnimatedString();
  /*readonly SVGAnimatedString*/      this.in2 = new SVGAnimatedString();
  /*readonly SVGAnimatedEnumeration*/ this.mode = new SVGAnimatedEnumeration();
  this._fpsa = SVGFilterPrimitiveStandardAttributes(this);
  return this;
};
SVGFEBlendElement.constructor = SVGElement;
SVGFEBlendElement.prototype = new SVGElement();
    // Blend Mode Types
  /*unsigned short*/ SVGFEBlendElement.SVG_FEBLEND_MODE_UNKNOWN  = 0;
  /*unsigned short*/ SVGFEBlendElement.SVG_FEBLEND_MODE_NORMAL   = 1;
  /*unsigned short*/ SVGFEBlendElement.SVG_FEBLEND_MODE_MULTIPLY = 2;
  /*unsigned short*/ SVGFEBlendElement.SVG_FEBLEND_MODE_SCREEN   = 3;
  /*unsigned short*/ SVGFEBlendElement.SVG_FEBLEND_MODE_DARKEN   = 4;
  /*unsigned short*/ SVGFEBlendElement.SVG_FEBLEND_MODE_LIGHTEN  = 5;

function SVGFEGaussianBlurElement() { 
  SVGElement.apply(this, arguments);
  /*readonly SVGAnimatedString*/ this.in1 = new SVGAnimatedString();
  /*readonly SVGAnimatedNumber*/ this.stdDeviationX = new SVGAnimatedNumber();
  /*readonly SVGAnimatedNumber*/ this.stdDeviationY = new SVGAnimatedNumber();
  this._fpsa = SVGFilterPrimitiveStandardAttributes(this);
  return this;
};
SVGFEGaussianBlurElement.constructor = SVGElement;
SVGFEGaussianBlurElement.prototype = new SVGElement();
/*void*/ SVGFEGaussianBlurElement.prototype.setStdDeviation = function(/*float*/ stdDeviationX, /*float*/ stdDeviationY ) {
  
};

function SVGCursorElement() { 
  SVGElement.apply(this, arguments);
  /*readonly SVGAnimatedLength*/ this.x = new SVGAnimatedLength();
  /*readonly SVGAnimatedLength*/ this.y = new SVGAnimatedLength();
  SVGURIReference.apply(this, arguments);
  return this;
};
SVGCursorElement.constructor = SVGElement;
SVGCursorElement.prototype = new SVGElement();

function SVGAElement(_doc) {
  SVGElement.apply(this);
  this._tar = _doc.createElement("a");
  _doc = null;
  /*readonly SVGAnimatedString*/ this.target = new SVGAnimatedString();
  this.target.baseVal = "_self";
  this.addEventListener("DOMAttrModified", function(evt){
    var tar = evt.target;
    if (evt.eventPhase === /*Event.BUBBLING_PHASE*/ 3) {
      return; //強制終了させる
    }
    if (evt.attrName === "target") {
      tar.target.baseVal = evt.newValue;
    } else if (evt.attrName === "xlink:title") {
      tar._tar.setAttribute("title", evt.newValue);
    }
    evt = null;
  }, false);
  this.addEventListener("DOMNodeInserted", function(evt){
    var tar = evt.target;
    if (evt.eventPhase === /*Event.BUBBLING_PHASE*/ 3) {
      return; //強制終了させる
    }
    if (tar.nextSibling) {
      if (!!tar.parentNode._tar && !!tar.nextSibling._tar) {
        tar.parentNode._tar.insertBefore(tar._tar, tar.nextSibling._tar);
      }
    } else if (!!tar.parentNode._tar){
      tar.parentNode._tar.appendChild(tar._tar);
    }
    var txts = tar._tar.style;
    txts.cursor = "hand";
    txts.left = "0px";
    txts.top = "0px";
    txts.textDecoration = "none";
    txts = null;
    var t = tar.target.baseVal;
    var st = "replace";
    if (t === "_blank") {
      st = "new";
    }
    tar.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:show", st);
    tar = evt = null;
  }, false);
  this.addEventListener("DOMNodeInsertedIntoDocument", function(evt){
    var tar = evt.target;
    if (!!tar._tar && (tar.nodeType === /*Node.ELEMENT_NODE*/ 1)) {
      var txts = tar._tar.style;
      txts.cursor = "hand";
      txts.textDecoration = "none";
      txts = null;
    }
    tar = evt = null;
    return; //強制終了させる
  }, true);
  this.addEventListener("DOMNodeInsertedIntoDocument", function(evt){
    var tar = evt.target;
    tar._tar.setAttribute("target", tar.target.baseVal);
    tar = null;
  }, false);
  SVGURIReference.apply(this, arguments);
  return this;
};
SVGAElement.constructor = SVGElement;
SVGAElement.prototype = new SVGElement();

function SVGViewElement() { 
  SVGElement.apply(this, arguments);
  /*readonly SVGStringList*/ this.viewTarget = new SVGStringList();
      //SVGFitToViewBoxのインターフェースを用いる
  /*readonly SVGAnimatedRect*/   this.viewBox = new SVGAnimatedRect();
  /*readonly SVGAnimatedPreserveAspectRatio*/ this.preserveAspectRatio = new SVGAnimatedPreserveAspectRatio();
  /*unsigned short*/             this.zoomAndPan = SVGZoomAndPan.SVG_ZOOMANDPAN_DISABLE;
  return this;
};
SVGViewElement.constructor = SVGElement;
SVGViewElement.prototype = new SVGElement();

function SVGScriptElement() { 
  SVGElement.apply(this);
  /*DOMString*/ this.type;
  SVGURIReference.apply(this, arguments);
  this.addEventListener("DOMAttrModified", function(evt){
    if (evt.attrName === "type") {
      evt.target.type = evt.newValue;
    }
    evt = null;
  }, false);
  this.addEventListener("S_Load", function(evt){
    var tar = evt.target, script = tar._text;
    var tod = tar.ownerDocument;
    NAIBU._temp_doc = tod;
    script = script.replace(/function\s+(\w+)/g, "$1 = function");
    script = "(function(document){" +script+ "})(NAIBU._temp_doc);"
    eval(script);
    tar = evt = script = null;
  }, false);
  this.addEventListener("DOMNodeInserted", function(evt){
    var tar = evt.target;
    if (evt.eventPhase === /*Event.BUBBLING_PHASE*/ 3) {
      if (tar.nodeName === "#cdata-section") {
        evt.currentTarget._text = tar.data;
      }
      return;
    }
    tar.addEventListener("DOMNodeInsertedIntoDocument", function(evt){
      var tar = evt.target;
      if (evt.eventPhase === Event.AT_TARGET && !tar.getAttributeNodeNS("http://www.w3.org/1999/xlink", "xlink:href")) {
        var evtt = tar.ownerDocument.createEvent("SVGEvents");
        evtt.initEvent("S_Load", false, false);
        evt.currentTarget.dispatchEvent(evtt);
      }
      tar = evt = null;
    }, false);
  }, false);
  return this;
};
SVGScriptElement.constructor = SVGElement;
SVGScriptElement.prototype = new SVGElement();

function SVGEvent() {
  Event.apply(this, arguments);
  return this;
};
SVGEvent.constructor = Event;
SVGEvent.prototype = new Event();

function SVGZoomEvent() { 
  UIEvent.apply(this, arguments);
  /*readonly SVGRect*/  this.zoomRectScreen = new SVGRect();
  /*readonly float*/    this.previousScale = 1;
  /*readonly SVGPoint*/ this.previousTranslate = new SVGPoint();
  /*readonly float*/    this.newScale = 1;
  /*readonly SVGPoint*/ this.newTranslate = new SVGPoint();
  return this;
};
SVGZoomEvent.constructor = UIEvent;
SVGZoomEvent.prototype = new UIEvent();

function SVGAnimationElement(es) {
  if (!!es) {
    return this;
  }
  SVGElement.apply(this);
  /*SIEにおけるSVGElementでは、fill属性とStyleSheetを結びつける機構があるため、
   *styleのsetPropertyメソッドを無効化させておく必要がある
   */
  this.style.setProperty = function(){};
  this._tar = null;
  /*readonly SVGElement*/ this.targetElement;
  this._beginValue = "0ms";
  this._endValue = null;
  this._currentFrame = 0;
  this._currentCount = 0;
  /*_maxCountはrepeatCount属性で指定された数値
   *_maxDurはrepeatDur属性で指定された数値
   */
  this._maxCount = 0;
  this._maxDur = 0;
  this._isRepeat = false;
  /*_simpleDurationプロパティは
   *dur属性の数値を収納しておく。属性がなければnullのまま
   */
  this._simpleDuration = null;
  /*_beginと_endプロパティはミリ秒数を収納する。リピート時に書き換えられることがある。
   *_beginはアニメ開始時の秒数。_endはアニメ終了時の秒数。
   *なお、文書読み込み終了時（アニメ開始時刻）の秒数を0とする。
   */
  this._begin = null;
  this._end = null;
  this._from = this._to = this._values = this._by = null;
  this._keyTimes = null;
  this.addEventListener("beginEvent", function(evt) {
    var tar = evt.target;
    if (!tar.isRepeat) {
      tar.endElementAt(tar.getSimpleDuration());
    } else {
      tar.beginElementAt(tar.getSimpleDuration());
      if (tar.getCurrentTime() !== 0) {
        var ttd = tar.ownerDocument, evt = ttd.createEvent("TimeEvents");
        tar._currentCount++;
        evt.initTimeEvent("repeatEvent", ttd.defaultView, tar._currentCount);
        tar.dispatchEvent(evt);
      }
    }
  }, false);
  this.addEventListener("DOMAttrModified", function(evt){
    if (evt.eventPhase === /*Event.BUBBLING_PHASE*/ 3) {
      return;
    }
    var tar = evt.target, name = evt.attrName;
    if (name === "begin") {
      tar._beginValue = evt.newValue;
    } else if (name === "end") {
      tar._endValue = evt.newValue;
    } else if (name === "dur") {
      tar._simpleDuration = tar._getOffset(evt.newValue);
    } else if (name === "repeatCount") {
      tar._maxCount = parseFloat(evt.newValue);
      tar._isRepeat = true;
    } else if (name === "repeatDur") {
      tar._maxDur = parseFloat(evt.newValue);
      tar._isRepeat = true;
    } else if (name === "from") {
      tar._from = evt.newValue;
    } else if (name === "to") {
      tar._to = evt.newValue;
    } else if (name === "values") {
      tar._values = evt.newValue.split(";");
    } else if (name === "by") {
      tar._by = evt.newValue;
    } else if (name === "keyTimes") {
      var s = evt.newValue.split(";");
      tar._keyTimes = []; //_keyTimesプロパティを初期化
      for (var i=0;i<s.length;++i) {
        tar._keyTimes[i] = parseFloat(s[i]);
      }
      s = null;
    }
    evt = null;
  }, false);
  this.addEventListener("DOMNodeInserted", function(evt){
    if (evt.eventPhase === /*Event.BUBBLING_PHASE*/ 3) {
      return; //強制終了させる
    }
    var tar = evt.target;
    tar.addEventListener("DOMNodeInsertedIntoDocument", function(evt){
      var tar = evt.target;
      /*以降の場合分けルールに関しては、下記の仕様を参照
       *http://www.jsa.or.jp/stdz/instac/syoukai/H13/H13annual_report/12/ngc-wg3/offline/smil_20_20020131/animation.html#AnimationNS-FromToBy
       */
      if (tar._values) {
      } else if (tar._from && tar._to) {
        tar._values = [tar._from, tar._to];
      } else if (tar._from && tar._by) {
        var n = parseFloat(tar._from) + parseFloat(tar._by), tanni = tar._from.match(/\D+/) || [""];
        tar._values = [tar._from, n+tanni[0]];
      } else if (tar._to) {
        tar._values = [null, tar._to];
      } else if (tar._by) {
        tar._values = [null, null, tar._by];
      } else if (!tar.hasChildNodes() && !tar.hasAttributeNS(null, "path")) { //SVGAnimateMotionElementに留意
        /*アニメーションの効果が出ないように調整する
         *SMILアニメーションの仕様を参照
         *
         *>if none of the from, to, by or values attributes are specified, the animation will have no effect
         *「3.2.2. Animation function values」より引用
         *http://www.w3.org/TR/2001/REC-smil-animation-20010904/#AnimFuncValues
         */
        return this;
      }
      if (tar.hasAttributeNS("http://www.w3.org/1999/xlink", "xlink:href")) {
        tar.targetElement = tar.ownerDocument.getElementById(tar.getAttributeNS("http://www.w3.org/1999/xlink", "xlink:href").substring(1))
      } else {
        tar.targetElement = tar.parentNode;
      }
      tar._eventSync(tar._beginValue,
          (function(te, offse, ta, t) {
            ta.addEventListener( t.match(te._eventRegExp)[0],
              function(){
                if (offse !== 0) {
                  te.beginElementAt(offse);
                } else {
                  te._begin = NAIBU.Time.currentFrame;
                  te.beginElement();
                  te._currentFrame++;
                }
              }, false);
           }), "beginElementAt");
      if (tar._endValue) {
        tar._eventSync(tar._endValue,
            (function(te, offse, ta, t) {
              ta.addEventListener( t.match(te._eventRegExp)[0],
                  function(){
                    te.endElementAt(offse);
                  }, false );
              }), "endElementAt");
      }
      evt = tar = null;
    }, false);
    evt = tar = null;
  }, false);
  this.addEventListener("repeatEvent", function(evt) {
    var tar = evt.target;
    if ((tar._currentCount >= tar._maxCount) || (tar.getCurrentTime() >= (tar._maxDur+tar.getStartTime()))) {
      tar._isRepeat = false;
    }
  }, false);
  return this;
};
SVGAnimationElement.constructor = SVGElement;
SVGAnimationElement.prototype = new SVGElement();
/*以下のメソッド（beginElementなど)については、
 *別モジュールであるsmil::ElementTimeControl(smil.js)を参照のこと
 */
/*void*/ SVGAnimationElement.prototype.beginElement = function() {
  var ttd = this.ownerDocument, evt = ttd.createEvent("TimeEvents");
  evt.initTimeEvent("beginEvent", ttd.defaultView, 0);
  this.dispatchEvent(evt);
};
/*void*/ SVGAnimationElement.prototype.endElement = function() {
  var ttd = this.ownerDocument, evt = ttd.createEvent("TimeEvents");
  evt.initTimeEvent("endEvent", ttd.defaultView, 0);
  this.dispatchEvent(evt);
};
/*void*/ SVGAnimationElement.prototype.beginElementAt = function(/*float*/ offset) {
  var ntc = this.ownerDocument.documentElement.getCurrentTime();
  this._begin = offset + ntc;
};
/*void*/ SVGAnimationElement.prototype.endElementAt = function(/*float*/ offset) {
  var ntc = this.ownerDocument.documentElement.getCurrentTime();
  this._end = offset + ntc;
};
SVGAnimationElement.prototype._eventRegExp = /(mouse|activ|clic|begi|en)[a-z]+/;
SVGAnimationElement.prototype._timeRegExp = /[\-\d\.]+(h|min|s|ms)?/;
SVGAnimationElement.prototype._unit = {
    "h"   : 2880000,
    "min" : 48000,
    "s"   : 800,
    "ms"  : 0.8
};
/*_getOffsetメソッド
 * どれだけズレの時間があるかを計測するメソッド
 *tに数値が使われていないときは0を返す
 *これはSMILアニメーションモジュールの以下の記述にあるように、値のデフォルトが0であることに起因する
 *http://www.w3.org/TR/2001/REC-smil20-20010807/smil-timing.html#Timing-Ex:0DurDiscreteMedia
 *http://www.w3.org/TR/2001/REC-smil20-20010807/smil-timing.html#Timing-DurValueSemantics
 ** Note that when the simple duration is "indefinite", some simple use cases can yield surprising results. See the related example #4 in Appendix B.
 */
SVGAnimationElement.prototype._getOffset = function(/*string*/ t) {
  var n = parseFloat(t.match(this._timeRegExp));
  if (!isNaN(n) && RegExp.$1) {
    var offset = n * this._unit[RegExp.$1]
  } else if (!isNaN(n)) {
    var offset = n;
  } else {
    var offset = 0;
  }
  n = t = null;
  return offset;
};
/*_eventSyncメソッド
 *イベントがある場合とない場合とで、別々の処理に分けるメソッド
 */
SVGAnimationElement.prototype._eventSync = function(/*string*/ t, /*function*/ f, /*string*/ methodName) {
  var offset = this._getOffset(t);
  this._begin = NAIBU.Time.Max;
  if ( /(mouse|activ|click|begin|end)/.test(t) ) { //イベントがある場合
    var tar;
    if ( /([^;]+)\.\D/.test(t) ) {
      tar = this.ownerDocument.getElementById(RegExp.$1);
    } else {
      tar = this.targetElement;
    }
    if (!offset && offset !== 0) {
      offset = NAIBU.Time.Max;
    }
    f(this, offset, tar, t);
  } else if (!offset && (t !== "undefined") && (offset !== 0)) {
    this._begin = 0;
  } else {
    this[methodName](offset);
  }
};
/*float*/ SVGAnimationElement.prototype.getStartTime = function(){
  if (!!this._begin || (this._begin === 0)) {
    return (this._begin);
  } else {
    throw new DOMException(DOMException.INVALID_STATE_ERR);
  }
};
/*getCurrentTimeメソッド
 *現在の時間コンテナ内での時刻であり、
 *決して現在時刻ではない。要素のbeginイベントの発火したときが0sである。
 */
/*float*/ SVGAnimationElement.prototype.getCurrentTime = function(){
  return (this._currentFrame * 125 * 0.8);
};
/*float*/ SVGAnimationElement.prototype.getSimpleDuration = function(){
  if (!!!this._simpleDuration && !!!this._end && (this._simpleDuration !== 0)) {
    throw new DOMException(DOMException.NOT_SUPPORTED_ERR);
  } else if (!!this._simpleDuration && !!this._end) {
    var s = (this._simpleDuration > this._end - this._begin) ? this._end - this._begin : this._simpleDuration;
  } else {
    var s = !!this._end ? this._end - this._begin : this._simpleDuration;
  }
 return s;
};
                    //raises( DOMException );
NAIBU.Time = {
  currentFrame : 0,
  Max : 7000,
  start : function() {
  if (NAIBU.Clip.length > 0) {
    screen.updateInterval = 42; //24fpsとして描画処理
    window.onscroll = function () {
      screen.updateInterval = 0;
      screen.updateInterval = 42;
    }
    NAIBU.stop = setInterval( (function() {
/*      try{*/
        var ntc = NAIBU.Time.currentFrame++;
        var nc = NAIBU.Clip;
        var s = ntc * 100; //フレーム数ntcをミリ秒数sに変換
        if (ntc > NAIBU.Time.Max) {
          clearInterval(NAIBU.stop);
        }
        for (var i=0,ncli=nc.length;i<ncli;++i) {
          var nci = nc[i];
          nci.ownerDocument.documentElement.setCurrentTime(s);
          if ("_begin" in nci) {
            if (nci.getStartTime() <= s) {
              if (nci.getCurrentTime() === 0) {
                nci.beginElement();
              }
              nci._currentFrame++;
            }
            if (nci._end && (nci._end <= s) && (nci.getCurrentTime() !== 0)) {
              nci.endElement();
              nci._frame && nci._frame();
              nci._currentFrame = 0;
              delete nci._begin;
              nci._end = null;
            } else if (!!nci._frame) {
              nci._frame();
            }
          }
          nci = null;
        }
/*      } catch (e) {
        stlog.add(e, 4157);
      }*/
 　　     }),
 　　　     1
　　    );
　　  } else {
      window.onscroll = function () {
        screen.updateInterval = 0;
  　　           window.onscroll = NAIBU.emptyFunction;
      }
　　  }
　}
};
NAIBU.Clip = [];
  
function SVGAnimateElement(){
  SVGAnimationElement.apply(this);
  /*NAIBU.Clipについては、NAIBU.Timeで使う
   *くわしくはNAIBU.Time.start関数のコードを参照
   */
  NAIBU.Clip[NAIBU.Clip.length] = this;
  /*_valueListプロパティは、
   *機械が理解できる形で保管されているvalueの値の配列リスト
   */
  this._valueList = [];
  this._isDiscrete = false;
  this.addEventListener("DOMAttrModified", function(evt){
    if (evt.eventPhase === /*Event.BUBBLING_PHASE*/ 3) {
      return; //強制終了させる
    }
    if ((evt.attrName === "calcMode") && (evt.newValue === "discrete")) {
      evt.target._isDiscrete = true;
    }
  }, false);
  this.addEventListener("DOMNodeInserted", function(evt){
    if (evt.eventPhase === /*Event.BUBBLING_PHASE*/ 3) {
      return; //強制終了させる
    }
    var tar = evt.target;
    tar.addEventListener("DOMNodeInsertedIntoDocument", function(evt){
      var tar = evt.target,
          attrName = tar.getAttributeNS(null, "attributeName"),
          ttr = tar.targetElement,
          tta = ttr[attrName];
      /*tar.valuesのリスト:  ["12px", "13px"]
       *tar._valueList:   [(new SVGPoint()), (new SVGPoint())]
       *  tar.valuesを機械が理解できるように変換したものがtar._valueList
       *この_valueListプロパティはアニメの際に使うので、_valuesプロパティはアニメ中に使わないことに注意
       */
      var vi = ttr.cloneNode(false);
      if (!tar._values[0]) {   //to属性か、by属性が設定されている場合
        var ttrs = ttr.ownerDocument.defaultView.getComputedStyle(ttr, "");
        tar._values[0] = ttr.getAttributeNS(null, attrName) || ttrs.getPropertyValue(attrName);
        if (!tar._values[1]　&& tar._values[2]) { //by属性のみが設定されている場合
          var v2 = parseFloat(tar._values[0]) + parseFloat(tar._values[2]), tanni = tar._values[0].match(/\D+/) || [""];
          tar._values[1] = v2 + tanni[0];
          tar._values.pop();
          v2 = tanni = null;
        }
      }
      if (!!tta) {
        tta.animVal = vi[attrName].baseVal;
        for (var i=0, tav=tar._values, tvli=tav.length;i<tvli;++i) {
          var vir = ttr.cloneNode(false); //仮の要素
          delete vir._tar;
          vir.setAttributeNS(null, attrName, tav[i]);
          tar._valueList[tar._valueList.length] = vir[attrName].baseVal;
        }
      } else if (!!CSS2Properties[attrName] || attrName.indexOf("-") > -1) { //スタイルシートのプロパティならば
        for (var i=0, tav=tar._values, tvli=tav.length;i<tvli;++i) {
          if ((attrName === "fill") || (attrName === "stroke") || (attrName === "stop-color")) {
            tar._valueList[i] = new SVGPaint();
            tar._valueList[i].setPaint(1, null, tav[i], null)
          } else {
            tar._valueList[i] = parseFloat(tav[i]);
          }
        }
      } else if ("animatedPoints" in ttr) {
        ttr.animatedPoints = vi.points;
        for (var i=0, tav=tar._values, tvli=tav.length;i<tvli;++i) {
          var vir = ttr.cloneNode(false);
          delete vir._tar;
          vir.setAttributeNS(null, "points", tav[i]);
          tar._valueList[tar._valueList.length] = vir.points;
        }
      } else if ("normalizedPathSegList" in ttr) {
        ttr.animatedNormalizedPathSegList = vi.normalizedPathSegList;
        for (var i=0, tav=tar._values, tvli=tav.length;i<tvli;++i) {
          var vir = ttr.cloneNode(false);
          delete vir._tar;
          vir.setAttributeNS(null, "d", tav[i]);
          tar._valueList[tar._valueList.length] = vir.normalizedPathSegList;
        }
      } else {
        vi = null;
        return;
      }
      evt = tta = vir = vi = null;
    }, false);
  }, false);
  this.addEventListener("beginEvent", function(evt) {
    var tar = evt.target;
    var attrName = tar.getAttributeNS(null, "attributeName"), newAttr = tar.targetElement.attributes.getNamedItemNS(null, attrName);
    var ttr = tar.targetElement, tta = ttr[attrName];
    tar._frame = function() {
      var d = tar.getSimpleDuration() * 0.8, n = tar._valueList.length-1, tg = tar.getCurrentTime();
      if ((n !== -1) && (d !== 0) && (tg <= d)) {
        if (tar._isDiscrete) {
          ++n; //discreteモードは他のモードに比べて、分割数が多いことに注意
        }
        var ii = Math.floor((tg*n) / d);
        if (ii === n) { //iiが境い目のときは、n-2を適用
          ii -= 1;
        }
      } else {
        return;
      }
      /*setAttrbute(NS)メソッドはDOM属性を書き換えるため利用しない。
      *
      * 参照：アニメーションサンドイッチモデル
      * >アニメーションが起動している時,それは実際,DOMの中の属性値は変化しない。
      *http://www.jsa.or.jp/stdz/instac/syoukai/H13/H13annual_report/12/ngc-wg3/offline/smil_20_20020131/animation.html#animationNS-AnimationSandwichModel
      */
      var evt = tar.ownerDocument.createEvent("MutationEvents");
      evt.initMutationEvent("DOMNodeInsertedIntoDocument", false, false, null, null, null, null, null);
      if (tar._keyTimes) {
        var di = (tar._keyTimes[ii+1] - tar._keyTimes[ii]) * d;
        var ti = tar._keyTimes[ii];
      } else {
        var di = d / n; //keyTimesがなければ均等に時間を配分しておく
        var ti = ii / n;
      }
      if (!!tta) {
        var base = tta.baseVal, tanim = tta.animVal;
        var v1 = tar._valueList[ii].value;
        /*vを求める公式に関しては、SMIL2.0 Animation Moduleの単純アニメーション関数の項を参照
         * 3.4.2 Specifying the simple animation function f(t)
         *http://www.w3.org/TR/2005/REC-SMIL2-20050107/animation.html#animationNS-SpecifyingAnimationFunction
         */
        if (!tar._isDiscrete) {
          var v2 = tar._valueList[ii+1].value, v = v1 + (v2-v1) * (tg-ti*d) / di;
        } else {
          var v = v1;
        }
        tanim.newValueSpecifiedUnits(base.unitType, v);
        tta.baseVal = tanim;
        tanim = null;
        ttr.dispatchEvent(evt);
        /*変化値はanimValプロパティに収納しておき、
         *変化する前の、元の値はbaseValプロパティに再び収納しておく
         */
        tta.animVal = tta.baseVal;
        tta.baseVal = base;
        di = null;
      } else if (!!CSS2Properties[attrName] || attrName.indexOf("-") > -1) { //スタイルシートのプロパティならば
        var base = null;
        var v1 = tar._valueList[ii].value, v2 = tar._valueList[ii+1].value;
        if (!tar._isDiscrete) {
          var v = v1 + (v2-v1) * (tg-ti*d) / di;
        } else {
          var v = v1;
        }
      } else if ("animatedPoints" in ttr) {
        var base = ttr.points;
        ttr.points = ttr.animatedPoints;
        ttr.dispatchEvent(evt);
        ttr.animatedPoints = ttr.points;
        ttr.points = base;
      } else if ("normalizedPathSegList" in ttr) {
        var base = ttr.normalizedPathSegList;
        ttr.normalizedPathSegList = ttr.animatedNormalizedPathSegList;
        ttr.dispatchEvent(evt);
        ttr.animatedNormalizedPathSegList = ttr.normalizedPathSegList;
        ttr.normalizedPathSegList = base;
      }
     evt = v1 = v2 = v = d = n = ii = tg = null;
    };
    evt = vir = null;
  }, false);
  this.addEventListener("endEvent", function(evt) {
    var tar = evt.target, fill = tar.getAttributeNS(null, "fill");
    if (!fill || (fill === "remove")) {
      var evt = tar.ownerDocument.createEvent("MutationEvents");
      evt.initMutationEvent("DOMNodeInsertedIntoDocument", false, false, null, null, null, null, null);
      tar.targetElement.dispatchEvent(evt);
      evt = null;
    }
  }, false);
  this.addEventListener("repeatEvent", function(evt) {
    var tar = evt.target;
  }, false);
  return this;
};
SVGAnimateElement.constructor = SVGAnimationElement;
SVGAnimateElement.prototype = new SVGAnimationElement(1);

function SVGSetElement(){
  SVGAnimationElement.apply(this);
  NAIBU.Clip[NAIBU.Clip.length] = this;
  this._to = "";
  this.addEventListener("DOMAttrModified", function(evt) {
    var tar = evt.target, name = evt.attrName;
    if (name === "to") {
      tar._to = evt.newValue;
    }
    tar = name = null;
  }, false);
  this.addEventListener("beginEvent", function(evt) {
    var tar = evt.target;
    if (tar.targetElement) {
      var attrName = tar.getAttributeNS(null, "attributeName"),
          newAttr = tar.targetElement.attributes.getNamedItemNS(null, attrName),
          tta = tar.targetElement[attrName];
      if (!!CSS2Properties[attrName] || attrName.indexOf("-") > -1) { //スタイルシートのプロパティならば
        var style = tar.ownerDocument.getOverrideStyle(tar.targetElement, "");
        style.setProperty(attrName, tar.getAttributeNS(null, "to"), null);
        style = null;
      } else if (!!tta) {
        var base = tta.baseVal;
        if (base instanceof SVGLength) {
          tta.baseVal = tar.ownerDocument.documentElement.createSVGLength();
        } else if (base instanceof SVGRect) {
          tta.baseVal = tar.ownerDocument.documentElement.createSVGRect();
        }
        /*setAttrbute(NS)メソッドはDOM属性を書き換えるため利用しない。
         *
         * 参照：アニメーションサンドイッチモデル
         * >アニメーションが起動している時,それは実際,DOMの中の属性値は変化しない。
         *http://www.jsa.or.jp/stdz/instac/syoukai/H13/H13annual_report/12/ngc-wg3/offline/smil_20_20020131/animation.html#animationNS-AnimationSandwichModel
         */
        var evt = tar.ownerDocument.createEvent("MutationEvents");
        evt.initMutationEvent("DOMAttrModified", true, false, newAttr, newAttr, tar._to, attrName, MutationEvent.MODIFICATION);
        tar.targetElement.dispatchEvent(evt);
        evt = null;
        /*変化値はanimValプロパティに収納しておき、
         *変化する前の、元の値はbaseValプロパティに再び収納しておく
         */
        tta.animVal = tta.baseVal;
        tta.baseVal = base;
      }
    }
    evt = tar = attrName = null;
  }, false);
  this.addEventListener("endEvent", function(evt) {
    var tar = evt.target,
        fill = tar.getAttributeNS(null, "fill");
    if (!fill || (fill === "remove")) {
      var attrName = tar.getAttributeNS(null, "attributeName"), style = tar.ownerDocument.defaultView.getComputedStyle(tar.targetElement, "");
      tar.targetElement.style.setProperty(attrName, style.getPropertyValue(attrName), null);
      var evtt = tar.ownerDocument.createEvent("MutationEvents");
      evtt.initMutationEvent("DOMNodeInsertedIntoDocument", false, false, null, null, null, null, null);
      tar.targetElement.dispatchEvent(evtt);
      attrName = style = evtt = null;
    }
    tar = fill = null;
  }, false);
  this.addEventListener("repeatEvent", function(evt) {
    var tar = evt.target, attrName = tar.getAttributeNS(null, "attributeName"), style = tar.ownerDocument.defaultView.getComputedStyle(tar.targetElement, "");
  }, false);
  return this;
};
SVGSetElement.constructor = SVGAnimationElement;
SVGSetElement.prototype = new SVGAnimationElement(1);

function SVGAnimateMotionElement(){
  SVGAnimationElement.apply(this);
  NAIBU.Clip[NAIBU.Clip.length] = this;
  this.addEventListener("DOMAttrModified", function(evt){
    if (evt.eventPhase === /*Event.BUBBLING_PHASE*/ 3) {
      return;
    }
    var tar = evt.target,
        name = evt.attrName;
    if (name === "path") {
      var d = tar.ownerDocument.createElementNS("http://www.w3.org/2000/svg", "path");
      d.setAttributeNS(null, "d", evt.newValue);
      tar._path = d;
      d = null;
    }
  }, false);
  this.addEventListener("DOMNodeInserted", function(evt){
    if (evt.eventPhase === /*Event.BUBBLING_PHASE*/ 3) {
      return; //強制終了させる
    }
    var tar = evt.target;
    tar.addEventListener("DOMNodeInsertedIntoDocument", function(evt){
      var vlist = [],
          ti;
      if (tar._values) {
        for (var i=0, tav=tar._values, tvli=tav.length;i<tvli;++i) {
          ti = tav[i];
          ti = ti.split(",");
          vlist[i] = [+ti[0], +ti[1]];
        }
        tar._valueList = vlist;
      }
    }, false);
  }, false);
  this.addEventListener("beginEvent", function(evt) {
    var tar = evt.target,
        trans = tar.targetElement.transform;
    /*アニメーション中に変化すべき値をanimValプロパティに入力して、
     *baseValと同じような値に設定。
     */
    trans.animVal = new SVGTransformList();
    if (trans.baseVal.numberOfItems !== 0) {
      trans.baseVal.consolidate();
      trans.animVal.initialize(trans.baseVal.createSVGTransformFromMatrix(trans.baseVal.getItem(0).matrix));
　　    } else {
      trans.animVal.appendItem(tar.ownerDocument.documentElement.createSVGTransform());
    }
    tar._frame = function() {
      var _tar = tar,
          tpn = _tar._path,
          tgsd = _tar.getSimpleDuration(),
          d = tgsd * 0.8,
          tg = _tar.getCurrentTime(),
          ii;
      if (tgsd === 0) {
         tgsd = null;
         return;
      }
      if (tpn) { //path属性が指定されていた場合、tpnは属性値となる
        var st = tpn.getTotalLength() * tg / d, //stは現在に至るまでの距離
            p = tpn.getPointAtLength(st),
            trans = _tar.targetElement.transform;
        trans.animVal.getItem(trans.animVal.numberOfItems-1).setTranslate(p.x, p.y);
        var base = trans.baseVal;
        trans.baseVal = trans.animVal;
        _tar.targetElement._cacheMatrix = null;
        var evtt = _tar.ownerDocument.createEvent("MutationEvents");
        evtt.initMutationEvent("DOMNodeInsertedIntoDocument", false, false, null, null, null, null, null);
        _tar.targetElement.dispatchEvent(evtt);
        trans.baseVal = base;
        evtt = base = trans = st = p = null;
      } else if (tar._valueList) {
        var total = 0, //totalは総距離
            st = 0,    //stは現在にいたるまでの距離
            tav = tar._valueList,
            n = tav.length - 1;
        if ((n !== -1) && (d !== 0) && (tg <= d)) {
          ii = Math.floor((tg*n) / d);
          if (ii === n) { //iiが境い目のときは、n-2を適用
            ii -= 1;
          }
        } else {
          return;
        }
        for (var i=1, tvli=tav.length;i<tvli;i+=2) {
          total += Math.sqrt(Math.pow(tav[i][1] - tav[i-1][1], 2) + Math.pow(tav[i][0] - tav[i-1][0], 2));
        }
        for (var i=1;i<ii;i+=2) {
          st += Math.sqrt(Math.pow(tav[i][1] - tav[i-1][1], 2) + Math.pow(tav[i][0] - tav[i-1][0], 2));
        }
        var p = tar.ownerDocument.documentElement.createSVGPoint(),
            trans = _tar.targetElement.transform;
        st = (st / total) * d;
        p.x = tav[ii][0] + (tav[ii+1][0] - tav[ii][0]) * (tg - st) / d;
        p.y = tav[ii][1] + (tav[ii+1][1] - tav[ii][1]) * (tg - st) / d;
        trans.animVal.getItem(trans.animVal.numberOfItems-1).setTranslate(p.x, p.y);
        var base = trans.baseVal;
        trans.baseVal = trans.animVal;
        _tar.targetElement._cacheMatrix = null;
        var evtt = _tar.ownerDocument.createEvent("MutationEvents");
        evtt.initMutationEvent("DOMNodeInsertedIntoDocument", false, false, null, null, null, null, null);
        _tar.targetElement.dispatchEvent(evtt);
        trans.baseVal = base;
        evtt = base = trans = st = p = null;
      }
    }
    evt = trans = tpn = tgsd = null;
  }, false);
  this.addEventListener("endEvent", function(evt) {
    var tar = evt.target,
        trans = tar.targetElement.transform,
        fill = tar.getAttributeNS(null, "fill");
    if (!fill || (fill === "remove")) {
      trans.animVal = trans.baseVal;
      var evtt = tar.ownerDocument.createEvent("MutationEvents");
      evtt.initMutationEvent("DOMNodeInsertedIntoDocument", false, false, null, null, null, null, null);
      tar.targetElement.dispatchEvent(evtt);
    }
    tar._frame = evt = evtt = null;
  }, false);
  this.addEventListener("repeatEvent", function(evt) {
    var tar = evt.target;
  }, false);
  return this;
};
SVGAnimateMotionElement.constructor = SVGAnimationElement;
SVGAnimateMotionElement.prototype = new SVGAnimationElement(1);

function SVGMPathElement() /* : 
                SVGElement,
                SVGURIReference,
                SVGExternalResourcesRequired*/ {
  SVGElement.apply(this);
  SVGURIReference.apply(this);
  return this;
};
SVGMPathElement.constructor = SVGElement;
SVGMPathElement.prototype = new SVGElement();

function SVGAnimateColorElement() {
  SVGAnimationElement.apply(this);
  NAIBU.Clip[NAIBU.Clip.length] = this;
  this._valueList = [];
  this.addEventListener("DOMNodeInserted", function(evt){
    if (evt.eventPhase === /*Event.BUBBLING_PHASE*/ 3) {
      return; //強制終了させる
    }
    var tar = evt.target;
    tar.addEventListener("DOMNodeInsertedIntoDocument", function(evt){
      var tar = evt.target,
          attrName = tar.getAttributeNS(null, "attributeName"),
          ttr = tar.targetElement,
          fstyle = tar.ownerDocument.defaultView.getComputedStyle(ttr, "");
      if (!tar._values[0]) {
        tar._values[0] = fstyle.getPropertyValue(attrName);
      }
      for (var i=0, tav=tar._values, tvli=tav.length;i<tvli;++i) {
        var to = new SVGColor();
        if (tar._values[i] === "currentColor") {
          to.setRGBColor(fstyle.getPropertyValue("color") || "black");
        } else if (tar._values[i] === "inherit") {
          to.setRGBColor(fstyle.getPropertyValue(attrName) || "black");
        } else {
          to.setRGBColor(tar._values[i]);
        }
        tar._valueList[tar._valueList.length] = to;
        to = null;
      }
    }, false);
  }, false);
  this.addEventListener("beginEvent", function(evt) {
    var tar = evt.target,
        attrName = tar.getAttributeNS(null, "attributeName"),
        style = tar.ownerDocument.getOverrideStyle(tar.targetElement, ""),
        fstyle = tar.ownerDocument.defaultView.getComputedStyle(tar.targetElement, "");
    if (tar._values[0] !== null) {
      style.setProperty(attrName, tar._values[0], null);
    }
    tar._frame = function() {
      var _tar = tar;
      /*公式に関しては、SMIL2.0 Animation Moduleの単純アニメーション関数の項を参照
       * 3.4.2 Specifying the simple animation function f(t)
       *http://www.w3.org/TR/2005/REC-SMIL2-20050107/animation.html#animationNS-SpecifyingAnimationFunction
       */
      var d = _tar.getSimpleDuration() * 0.8,
          n = _tar._valueList.length - 1,
          tg = _tar.getCurrentTime(),
          ii, di, ti;
      if ((n !== -1) && (d !== 0) && (tg <= d)) {
        ii = Math.floor((tg*n) / d);
        if (ii === n) { //iiが境い目のときは、n-2を適用
          ii -= 1;
        }
      } else {
        return;
      }
      if (tar._keyTimes) {
        di = (tar._keyTimes[ii+1] - tar._keyTimes[ii]) * d;
        ti = tar._keyTimes[ii];
      } else {
        di = d / n; //keyTimesがなければ均等に時間を配分しておく
        ti = ii / n;
      }
      var fc = _tar._valueList[ii].rgbColor,
          tc = _tar._valueList[ii+1].rgbColor,
          durd = (tg-ti*d) / di,
          num = CSSPrimitiveValue.CSS_NUMBER,
          fr = fc.red.getFloatValue(num),
          fg = fc.green.getFloatValue(num),
          fb = fc.blue.getFloatValue(num),
          r = fr + (tc.red.getFloatValue(num) - fr) * durd,
          g = fg + (tc.green.getFloatValue(num) - fg) * durd,
          b = fb + (tc.blue.getFloatValue(num) - fb) * durd;
      style.setProperty(attrName, "rgb(" +Math.ceil(r)+ "," +Math.ceil(g)+ "," +Math.ceil(b)+ ")", null);
      _tar = d = n = tg = fc = tc = fr = fg = fb = num = r = g = b = null;
    }
  }, false);
  this.addEventListener("endEvent", function(evt) {
    var tar = evt.target;
    var evtt = tar.ownerDocument.createEvent("MutationEvents");
    evtt.initMutationEvent("DOMNodeInsertedIntoDocument", false, false, null, null, null, null, null);
    tar.targetElement.dispatchEvent(evtt);
    tar._frame = evt = evtt = null;
  }, false);
  this.addEventListener("repeatEvent", function(evt) {
    var tar = evt.target;
  }, false);
  return this;
};
SVGAnimateColorElement.constructor = SVGAnimationElement;
SVGAnimateColorElement.prototype = new SVGAnimationElement(1);

function SVGAnimateTransformElement() {
  SVGAnimationElement.apply(this);
  NAIBU.Clip[NAIBU.Clip.length] = this;
  this.addEventListener("beginEvent", function(evt) {
    var tar = evt.target, trans = tar.targetElement.transform;
    /*アニメーション中に変化すべき値をanimValプロパティに入力して、
     *baseValと同じような値に設定。
     */
    trans.animVal = new SVGTransformList();
    if (trans.baseVal.numberOfItems !== 0) {
      trans.animVal.initialize(trans.baseVal.createSVGTransformFromMatrix(trans.baseVal.getItem(0).matrix));
    }
    trans.animVal.appendItem(tar.ownerDocument.documentElement.createSVGTransform());
  }, false);
  this.addEventListener("endEvent", function(evt) {
    var tar = evt.target;
  }, false);
  this.addEventListener("repeatEvent", function(evt) {
    var tar = evt.target;
  }, false);
  return this;
};
SVGAnimateTransformElement.constructor = SVGAnimationElement;
SVGAnimateTransformElement.prototype = new SVGAnimationElement(1);

function SVGFontElement() /*: 
                SVGElement,
                SVGExternalResourcesRequired,
                SVGStylable*/ {
  SVGElement.apply(this);
  /*_isExternalは外部から呼び出されたfont要素ならば、真(1)となる*/
  /*boolean or number*/ this._isExternal = 0;
  this.addEventListener("DOMNodeInserted", function(evt){
    var tar = evt.target;
    if (evt.eventPhase === /*Event.BUBBLING_PHASE*/ 3) {
      return;
    }
    tar.addEventListener("DOMNodeInsertedIntoDocument", function(evt){
      var tar = evt.target, svgns = "http://www.w3.org/2000/svg", fontFace = tar.getElementsByTagNameNS(svgns, "font-face").item(0);
      var nefunc = function(evt){
        var svg = evt.target;
        /*以下のtarはfont要素*/
        var familyName = fontFace.getAttributeNS(null, "font-family");
        var textElements = tar.ownerDocument.getElementsByTagNameNS(svgns, "text");
        for (var i=0,_tar=tar,tli=textElements.length;i<tli;++i) {
          var ti = textElements[i], style = _tar.ownerDocument.defaultView.getComputedStyle(ti, '');
          if (style.getPropertyValue("font-family", null).indexOf(familyName) > -1) {
            NAIBU._noie_createFont(ti, _tar, true);
          }
        }
        evt = tar = svg = curt = textElments = svgns = _tar = null;
      };
      if (!fontFace.__isLinked || tar._isExternal) {
        tar.ownerDocument.documentElement._svgload_limited = 0;
        tar.ownerDocument.documentElement.addEventListener("SVGLoad", nefunc, false);
      }
    }, false);
  }, false);
  return this;
};
SVGFontElement.constructor = SVGElement;
SVGFontElement.prototype = new SVGElement();

function SVGGlyphElement() /*: 
                SVGElement,
                SVGStylable*/ {
  SVGElement.apply(this);
  return this;
};
SVGGlyphElement.constructor = SVGElement;
SVGGlyphElement.prototype = new SVGElement();

function SVGMissingGlyphElement() /*: 
                SVGElement,
                SVGStylable*/ {
  SVGElement.apply(this);
  return this;
};
SVGMissingGlyphElement.constructor = SVGElement;
SVGMissingGlyphElement.prototype = new SVGElement();

function SVGHKernElement() {
  SVGElement.apply(this);
  return this;
};
SVGHKernElement.constructor = SVGElement;
SVGHKernElement.prototype = new SVGElement();

function SVGVKernElement() {
  SVGElement.apply(this);
  return this;
};
SVGVKernElement.constructor = SVGElement;
SVGVKernElement.prototype = new SVGElement();

function SVGFontFaceElement() {
  SVGElement.apply(this);
  /*boolean(or number)*/ this._isLinked = 0;
  this.addEventListener("DOMNodeInserted", function(evt){
    if (evt.eventPhase === /*Event.BUBBLING_PHASE*/ 3) {
      if (evt.target.localName === "font-face-uri") { //外部リンクがあれば
        evt.currentTarget._isLinked = 1;
      }
      return; //強制終了させる
    }
  }, false);
  return this;
};
SVGFontFaceElement.constructor = SVGElement;
SVGFontFaceElement.prototype = new SVGElement();

function SVGFontFaceSrcElement() {
  SVGElement.apply(this);
  return this;
};
SVGFontFaceSrcElement.constructor = SVGElement;
SVGFontFaceSrcElement.prototype = new SVGElement();

function SVGFontFaceUriElement() {
  SVGElement.apply(this);
  this.addEventListener("DOMNodeInserted", function(evt){
    if (evt.eventPhase === /*Event.BUBBLING_PHASE*/ 3) {
      return; //強制終了させる
    }
    evt.target.ownerDocument.documentElement._svgload_limited--
    evt.target.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:show", "embed");
  }, false);
  this.addEventListener("S_Load", function(evt){
    var tar = evt.target, tpp = tar.parentNode.parentNode.parentNode;
    if (tpp.localName === "defs") {
      tpp = tar.parentNode.parentNode; //tppをfont-face要素としておく
    }
    tar._instance._isExternal = 1;
    tpp.parentNode.appendChild(tar._instance);
    evt = tar = tpp = null;
  }, false);
  SVGURIReference.apply(this);
  return this;
};
SVGFontFaceUriElement.constructor = SVGElement;
SVGFontFaceUriElement.prototype = new SVGElement();

function SVGFontFaceFormatElement() {
  SVGElement.apply(this);
  return this;
};
SVGFontFaceFormatElement.constructor = SVGElement;
SVGFontFaceFormatElement.prototype = new SVGElement();

function SVGFontFaceNameElement() {
  SVGElement.apply(this);
  return this;
};
SVGFontFaceNameElement.constructor = SVGElement;
SVGFontFaceNameElement.prototype = new SVGElement();

function SVGDefinitionSrcElement() {
  SVGElement.apply(this);
  return this;
};
SVGDefinitionSrcElement.constructor = SVGElement;
SVGDefinitionSrcElement.prototype = new SVGElement();

function SVGMetadataElement() {
  SVGElement.apply(this);
  return this;
};
SVGMetadataElement.constructor = SVGElement;
SVGMetadataElement.prototype = new SVGElement();

function SVGForeignObjectElement() /*: 
                SVGElement,
                SVGTests,
                SVGLangSpace,
                SVGExternalResourcesRequired,
                SVGStylable,
                SVGTransformable,
                events::EventTarget*/ { 
  SVGElement.apply(this);
  /*readonly SVGAnimatedLength*/ this.x = new SVGAnimatedLength();
  /*readonly SVGAnimatedLength*/ this.y = new SVGAnimatedLength();
  /*readonly SVGAnimatedLength*/ this.width = new SVGAnimatedLength();
  /*readonly SVGAnimatedLength*/ this.height = new SVGAnimatedLength();
  return this;
};
SVGForeignObjectElement.constructor = SVGElement;
SVGForeignObjectElement.prototype = new SVGElement();

//#endif  _SVG_IDL_
/*SVGの要素マッピング（DOMでは定められていないが、必須）
 *本来であれば、SVGDocumentのcreateElementNSメソッドを上書きすることが望ましいが、
 *SIEでは軽量化のために、マッピングを用いた
 */
DOMImplementation["http://www.w3.org/2000/svg"] = {
  Document:        SVGDocument,
  svg:             SVGSVGElement,
  g:               SVGGElement,
  path:            NAIBU.SVGPathElement,
  title:           SVGTitleElement,
  desc:            SVGDescElement,
  defs:            SVGDefsElement,
  linearGradient:  SVGLinearGradientElement,
  radialGradient:  SVGRadialGradientElement,
  stop:            SVGStopElement,
  rect:            SVGRectElement,
  circle:          SVGCircleElement,
  ellipse:         SVGEllipseElement,
  polyline:        SVGPolylineElement,
  polygon:         SVGPolygonElement,
  text:            SVGTextElement,
  tspan:           SVGTSpanElement,
  image:           SVGImageElement,
  line:            SVGLineElement,
  a:               SVGAElement,
  altGlyphDef:     SVGAltGlyphDefElement,
  altGlyph:        SVGAltGlyphElement,
  altGlyphItem:    SVGAltGlyphItemElement,
  animateColor:    SVGAnimateColorElement,
  animate:         SVGAnimateElement,
  animateMotion:   SVGAnimateMotionElement,
  animateTransform:SVGAnimateTransformElement,
  clipPath:        SVGClipPathElement,
  colorProfile:    SVGColorProfileElement,
  cursor:          SVGCursorElement,
  definitionSrc:   SVGDefinitionSrcElement,
  feBlend:         SVGFEBlendElement,
  feGaussianBlur:  SVGFEGaussianBlurElement,
  filter:          SVGFilterElement,
  font:            SVGFontElement,
  "font-face":     SVGFontFaceElement,
  "font-face-format":SVGFontFaceFormatElement,
  "font-face-name":SVGFontFaceNameElement,
  "font-face-src": SVGFontFaceSrcElement,
  "font-face-uri": SVGFontFaceUriElement,
  foreignObject:   SVGForeignObjectElement,
  glyph:           SVGGlyphElement,
  glyphRef:        SVGGlyphRefElement,
  hkern:           SVGHKernElement,
  marker:          SVGMarkerElement,
  mask:            SVGMaskElement,
  metadata:        SVGMetadataElement,
  missingGlyph:    SVGMissingGlyphElement,
  mpath:           SVGMPathElement,
  script:          SVGScriptElement,
  set:             SVGSetElement,
  style:           SVGStyleElement,
  "switch":        SVGSwitchElement,
  textPath:        SVGTextPathElement,
  tref:            SVGTRefElement,
  use:             SVGUseElement,
  view:            SVGViewElement,
  vkern:           SVGVKernElement,
  pattern:         SVGPatternElement
};

NAIBU._fontSearchURI = function(evt){
  var doc = evt.target.ownerDocument;
  var tsrc = doc.getElementsByTagNameNS("http://www.w3.org/2000/svg", "font-face-uri");
  for (var i=0;i<tsrc.length;++i) {
    var src = tsrc[i].getAttributeNS("http://www.w3.org/1999/xlink", "href");
    var ids = src.substring(src.indexOf("#")+1, src.length);
    var xmlhttp = NAIBU.xmlhttp;
    xmlhttp.open("GET", src.replace(/#.+$/, ""), true);
    xmlhttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    xmlhttp.onreadystatechange = function() {
      if ((xmlhttp.readyState === 4)  &&  (xmlhttp.status === 200)) {
        var doce = (new DOMParser()).parseFromString(xmlhttp.responseText, "text/xml");
        NAIBU._font({document:doce, docu:doc, id:ids});
        xmlhttp = doc = doce = null;
      }
    };
    xmlhttp.send(null);
  }
};
/*_font関数は、SVGFontで使う*/
NAIBU._font = function (data) {
  var doc = data.document, svgns = "http://www.w3.org/2000/svg";
  //getElementByIdは使えないので注意（DOMParserを使った場合、DTDでの指定が必要）
  var font = doc.getElementsByTagNameNS(svgns, "font").item(0);
  var familyName = font.getElementsByTagNameNS(svgns, "font-face").item(0).getAttributeNS(null, "font-family");
  if (familyName && (font.getAttributeNS(null, "id") === data.id)) {
    var textElements = data.docu.getElementsByTagNameNS(svgns, "text");
    for (var i=0,tli=textElements.length;i<tli;++i) {
      var ti = textElements[i], style = data.docu.defaultView.getComputedStyle(ti, '');
      if (style.getPropertyValue("font-family", null).indexOf(familyName) > -1) {
        NAIBU._noie_createFont(ti, font, false);
      }
    }
  }
  doc = data = null;
};
NAIBU._noie_createFont = function(/*Element*/ ti, /*Element*/ font, /*boolean*/ isMSIE) {
  var style = ti.ownerDocument.defaultView.getComputedStyle(ti, ''),
      svgns = "http://www.w3.org/2000/svg",
      //isTategakiは縦書きならば真
      isTategaki = ti.getAttributeNS(null, "writing-mode") || ti.parentNode.getAttributeNS(null, "writing-mode"),
      horizOrVert = isTategaki ? "vert-adv-y" : "horiz-adv-x",
      node = ti.firstChild, data, glyphs = font.getElementsByTagNameNS(svgns, "glyph"),
      em = parseFloat(font.getElementsByTagNameNS(svgns, "font-face").item(0).getAttributeNS(null, "units-per-em") || 1000),
      advX = parseFloat( (font.getAttributeNS(null, horizOrVert) || em) ), //字幅の設定
      dx = parseFloat(ti.getAttributeNS(null, "x") || 0),
      dy = parseFloat(ti.getAttributeNS(null, "y") || 0),
      fontSize = parseFloat(style.getPropertyValue("font-size")),
      fe = fontSize / em;
      ds = false, npdlist = ["fill",
  "fill-opacity",
  "stroke",
  "stroke-width",
  "stroke-linecap",
  "stroke-linejoin",
  "stroke-miterlimit",
  "stroke-dasharray",
  "stroke-opacity",
  "opacity",
  "cursor"];
  if (/a/[-1] === 'a') { //Firefoxならば
    ds = true;
  } else if (isMSIE || isTategaki) {
    ds = true;
  }
  if (ds){
     while(node) {
      if (!glyphs) {
        break;
      }
      data = node.data;
      if (data !== void 0) { //dataがある場合
        var advanceX = [], glyphData = [];
        for (var i=0,gli=glyphs.length;i<gli;++i) {
          var glyph = glyphs[i], unicode = glyph.getAttributeNS(null, "unicode") || "なし"; //unicode属性に指定がない場合、処理させないようにする
          var orientation = glyph.getAttributeNS(null, "orientation"), isVert = true, isOrientationAttribute = true;
          if (orientation) {
            if (orientation === "h") {
              isVert = false;
            }
          } else {
            isOrientationAttribute = false;
          }
          if ( (isTategaki && isVert) || !(isTategaki || isVert) || !isOrientationAttribute){
            //indexは該当する文字が何番目にあるかの数字
            var index = data.indexOf(unicode);
            while (index > -1) {
              advanceX[index] = parseFloat(glyph.getAttributeNS(null, horizOrVert) || advX); //字幅を収納
              glyphData[index] = glyph.getAttributeNS(null, "d");
              index = data.indexOf(unicode, index+1);
            }
          }
        }
        for (var i=0,adv=0;i<data.length;++i) {
          if (advanceX[i] !== void 0) { //配列に含まれていれば
            var path = ti.ownerDocument.createElementNS(svgns, "path");
            //advance、すなわち字幅の長さ分、ずらしていく
            var matrix = ti.ownerDocument.documentElement.createSVGMatrix();
            matrix.a = fe;
            matrix.d = -fe;
            for (var j=0;j<npdlist.length;++j){
              var nj = npdlist[j], tg = ti.getAttributeNS(null, nj);
              if (tg) {
                path.setAttributeNS(null, nj, tg);
              }
            }
            if (isTategaki) {
              var y= dy + adv*fe, x = dx;
              if ("、。".indexOf(data.charAt(i)) > -1) { //句読点の場合
                var fms = fontSize / Math.SQRT2;
                x += fms;
                y -= fms;
                fms = null;
              }
              matrix.e = x;
              matrix.f = y;
            } else {
              matrix.e = dx + adv*fe;
              matrix.f = dy;
            }
            path.setAttributeNS(null, "transform", "matrix(" +matrix.a+ "," +matrix.b+ "," +matrix.c+ "," +matrix.d+ "," +matrix.e+ "," +matrix.f+ ")");
            path.setAttributeNS(null, "d", glyphData[i]);
            ti.parentNode.insertBefore(path, ti);
            adv += advanceX[i];
            matrix = null;
          }
        }
        adv = advanceX = glyphData = null;
      } else if ("tspan|a".indexOf(node.localName) > -1){
        NAIBU._noie_createFont(node, font, isMSIE);
      }
      node = node.nextSibling;
    }
    if (isMSIE) {
      var style = ti.ownerDocument.getOverrideStyle(ti, null);
      style.setProperty("visibility", "hidden");
      style = null;
    } else {
      ti.setAttributeNS(null, "opacity", "0");
    }
  }
  data = isTategaki = horizOrVert = em = advX = dx = dy = fontSize = style = svgns = node = null;
};

/*以下は、getComputedStyleメソッドで使うために、CSS2Propertiesの_listプロパティに、
 *CSSprimitiveValueのリストを収納している。なお、その際に、writingModeなどはwriting-modeに変更している
 */
(function(){
  var s = new CSSStyleDeclaration(),
  　　　　　slis = s._list,
      n = 0,
      regAZ = /([A-Z])/,
      regm = /\-/,
      u, t;
  for (var i in CSS2Properties) {
    if(CSS2Properties.hasOwnProperty(i)) {
      t = i.replace(regAZ, "-");
      if (!!RegExp.$1) {
        u = "-" +RegExp.$1.toLowerCase();
      } else {
        u = "-";
      }
      t = t.replace(regm, u);
      s.setProperty(t, CSS2Properties[i]);
      slis[t] = slis[n]; //この処理はCSSモジュールのgetComputedStyleメソッドのため
      slis[n]._isDefault = 1;
      ++n;
      i = t = u =  null;
    }
  }
  slis._opacity = 1;
  slis._fontSize = 12;
  CSS2Properties._list = slis;
  Document.prototype.defaultView._defaultCSS = slis;
  s = n = regAZ = regm = slis =null;
})();

NAIBU.addEvent = function(evt,lis){
  if (window.addEventListener) {
    window.addEventListener(evt, lis, false);
  } else if (window.attachEvent) {
    window.attachEvent('on'+evt, lis);
  } else {
    window['on'+evt] = lis;
  }
  //Sieb用
  if (sieb_s) {
    lis();
  }
};

function unsvgtovml() {
  try {
    if ("stop" in NAIBU) {
      clearInterval(NAIBU.stop);
    }
    window.onscroll = NAIBU.emptyFunction;
    window.detachEvent("onload", NAIBU._main);
    NAIBU.freeArg();
    Element = SVGElement = Attr = NamedNodeMap = CSS2Properties = CSSValue = CSSPrimitiveValue = NAIBU.xmlhttp = Node = Event = NAIBU = stlog = STLog = SVGColor = SVGPaint = null;
    Array = ActiveXObject = null;
  } catch(e) {}
}
/*_main関数
 *一番最初に起動するべき関数 
 */
NAIBU._main = (function() {
  stlog = new STLog(false);
  var xmlhttp,         //XMLHttpオブジェクトを生成
      _doc = document; //documentのエイリアスを作成
  try {
    xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
  } catch (e) {
    try {
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    } catch (E) {
      xmlhttp = false;
    }
  }
  if (!xmlhttp) {
    try {
      xmlhttp = new XMLHttpRequest();
    } catch (e) {
      xmlhttp = false;
    }
  }
  NAIBU.xmlhttp = xmlhttp;
  var nd;
  if (("namespaces" in _doc) && !_doc.namespaces["v"]) {
    NAIBU.doc = new ActiveXObject("MSXML2.DomDocument");
    nd = NAIBU.doc;
    _doc.namespaces.add("v","urn:schemas-microsoft-com:vml");
    _doc.namespaces.add("o","urn:schemas-microsoft-com:office:office");
    var st = _doc.createStyleSheet();
    var vmlUrl = "behavior: url(#default#VML);display: inline-block;} "; //inline-blockはIEのバグ対策
    st.cssText = "v\\:rect{" +vmlUrl+ "v\\:image{" +vmlUrl+ "v\\:fill{" +vmlUrl+ "v\\:stroke{" +vmlUrl+ "o\\:opacity2{" +vmlUrl
      + "dn\\:defs{display:none}"
      + "v\\:group{text-indent:0px;position:relative;width:100%;height:100%;" +vmlUrl
      + "v\\:shape{width:100%;height:100%;" +vmlUrl;
  }
  var ary = _doc.getElementsByTagName("script");
  //全script要素をチェックして、type属性がimage/svg+xmlならば、中身をSVGとして処理する
  for (var i=0; ary[i]; ++i) {
    var ai = ary[i],
        hoge = ai.type;
    if (ai.type === "image/svg+xml") {
      var ait = ai.text;
      if (sieb_s && ait.match(/&lt;svg/)) {
        //ソース内のタグを除去
        ait = ait.replace(/<.+?>/g, "");
        //エンティティを文字に戻す
        ait = ait.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&amp;/g, "&");
      }
      if (NAIBU.isMSIE) {
        var gsd = new GetSVGDocument(ai);
        gsd.xmlhttp = {
          readyState : 4,
          status : 200,
          responseText : ait.replace(/\shref=/g, " target='_top' xlink:href=")
        }
        gsd._ca();
      } else {
        var base = location.href.replace(/\/[^\/]+?$/,"/"); //URIの最後尾にあるファイル名は消す。例: /n/sie.js -> /n/
        ait = ait.replace(/\shref=(['"a-z]+?):\/\//g, " target='_top' xlink:href=$1://").replace(/\shref=(.)/g, " target='_top' xlink:href=$1"+base);
        var s = NAIBU.textToSVG(ait,ai.getAttribute("width"),ai.getAttribute("height"));
        ai.parentNode.insertBefore(s,ai);
      }
      ai = ait = null;
    }
    hoge = null;
  }
  NAIBU.doc = nd;
  nd = ary = null;
  if (xmlhttp && NAIBU.isMSIE) {
    if (!!_doc.createElementNS && !!_doc.createElementNS( "http://www.w3.org/2000/svg", "svg").createSVGRect) { //IE9ならば
    } else { //IE6-8ならば
      var ob = _doc.getElementsByTagName("object"),
          em = _doc.getElementsByTagName("embed"),
          s=[],
          _search = function(_ob) {
            var ifr, obi, n;
            for (var i=0;_ob[i];++i) {
              obi = _ob[i];
              s[s.length] = new GetSVGDocument(obi);
              ifr = _doc.createElement("iframe");
              ifr.style.background = "black";
              n = obi.getAttribute("width");
              n && ifr.setAttribute("width", n);
              n = obi.getAttribute("height");
              n && ifr.setAttribute("height", n);
              ifr.marginWidth = ifr.marginHeight = "0px"; //このマージン設定がないと、全体がずれてしまう
              ifr.scrolling = "no";
              ifr.frameBorder = "0";
             /*iframe要素を使って、描画のプロセスを分離する
              *したがって、_docはdocumentとは別のオブジェクトとなる
              */
              obi.parentNode.insertBefore(ifr, obi);
            }
            i = obi = ifr = _ob = null;
          };
      _search(ob);
      _search(em);
      ob = em = _search = null;
      for (var i=0;i<s.length;++i) {
        if (i < s.length-1) {
          s[i]._next = s[i+1]
        }
      }
      if (i > 0) {
        s[0]._init(); //初期化作業を開始
      }
      s = null;
    }
  } else {
    var ob = _doc.getElementsByTagName("object");
    for (var i=0;i<ob.length;++i) {
      if (ob[i].contentDocument) {
        NAIBU._fontSearchURI({target:{ownerDocument:ob[i].contentDocument}});
      } else if (ob[i].getSVGDocument) {
        ob[i].getSVGDocument()._docElement.addEventListener("SVGLoad", NAIBU._fontSearchURI, false);
      } else {
      }
    }
  }
  xmlhttp = _doc = null;
});
NAIBU.addEvent("load", NAIBU._main);
NAIBU.utf16 = function ( /*string*/ s)  {
  return unescape(s);
}
NAIBU.unescapeUTF16 = function ( /*string*/ s) {
  return s.replace(/%u\w\w\w\w/g,  NAIBU.utf16);
}
//Text2SVG機能。SVGのソース（文章）をSVG画像に変換できる。
NAIBU.textToSVG = function ( /*string*/ source, /*float*/ w, /*float*/ h) {
  /*Safari3.xでは、DOMParser方式だと、文字が表示されないバグがあるため、
   *dataスキーム方式を採用する
   */
  if (navigator.userAgent.indexOf('WebKit') > -1 || navigator.userAgent.indexOf('Safari') > -1) { //WebKit系ならば
    var data = 'data:image/svg+xml;charset=utf-8,' + NAIBU.unescapeUTF16(escape(source));
    var ob = document.createElement("object");
    ob.setAttribute("data",data);
    ob.setAttribute("width",w);
    ob.setAttribute("height",h);
    ob.setAttribute("type","image/svg+xml");
    return ob;
  } else {
    var doc = (new DOMParser()).parseFromString(source, "text/xml");
    return (document.importNode(doc.documentElement, true));
  }
};
NAIBU.addEvent("unload", unsvgtovml);
//IEならばtrue
NAIBU.isMSIE = /*@cc_on!@*/false;