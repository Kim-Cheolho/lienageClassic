/**
 * ==========================================
 * Crafting 데이터베이스 (data.js) 작성 가이드
 * ==========================================
 *
 * [1] 카테고리 (category) 매핑 기준 (UI 탭과 연동)
 * - "weapon"    : 무기 탭
 * - "armor"     : 방어구 탭
 * - "accessory" : 장신구 탭
 * - "material"  : 재료 탭 (모든 하위 재료도 material로 통일할 것을 권장)
 *
 * [2] 아이템 데이터 추가 템플릿 (items_db)
 * "아이템명": {
 * id: "아이템명",         // (필수) 객체 키값과 동일한 한글 고유 ID
 * name: "출력될 이름",    // (필수) 화면에 표시될 아이템 이름
 * category: "weapon",     // (필수) 위 [1]의 매핑 기준 중 택 1
 * type: "활(양손)",       // (선택) 이름 하단에 표시될 분류
 * desc: "아이템 설명",    // (선택) 부가 설명
 * stats: [                // (선택) 상세 스탯 영역에 표시될 정보 (배열)
 * { label: "클래스", value: "기사/요정" },
 * { label: "타격치", value: "3/2" }
 * ],
 * icon: "🏹",             // (선택) 이미지가 없을 때 표시할 대체 이모지
 * image: "../img/123.png"  // (선택) 이미지 로컬 경로 또는 웹 URL 링크
 * }
 *
 * [3] 레시피 데이터 추가 템플릿 (recipes_db)
 * "제작할아이템명": {       // items_db에 존재하는 id와 반드시 일치해야 함
 * npc: "네루파",          // (선택) 제작 NPC 이름
 * location: "요정의숲",   // (선택) 제작 NPC의 위치 정보
 * materials: [            // (필수) 하위 필요 재료 배열
 * { id: "재료명1", count: 8 },  // items_db에 존재하는 재료 id와 필요 수량
 * { id: "재료명2", count: 3 }
 * ]
 * }
 */

const items_db = {
	"아데나": { id: "아데나", name: "아데나", category: "base", icon: "", image: "../img/5.png" },
	"크로스보우": { id: "크로스보우", name: "크로스보우", category: "weapon", type: "활(양손)", desc: "무기", stats: [{ label: "종류", value: "활(양손)" }, { label: "클래스", value: "기사/요정" }, { label: "타격치", value: "3/2" }, { label: "무게", value: "50" }, { label: "옵션", value: "원거리 대미지 +2, 원거리 명중 +3" }], icon: "🏹", image: "../img/305.png" },
	"장궁": { id: "장궁", name: "장궁", category: "weapon", type: "활(양손)", desc: "무기", stats: [{ label: "클래스", value: "기사/요정" }], icon: "", image: "../img/123.png" },
	"싸울아비 장검": { id: "싸울아비 장검", name: "싸울아비 장검", category: "weapon", type: "검(한손)", desc: "무기", stats: [{ label: "클래스", value: "기사" }], icon: "🗡", image: "../img/112.png" },

	"마법의 플룻": { id: "마법의 플룻", name: "마법의 플룻", category: "material", icon: "", image: "../img/43.png" },
	"판의 뿔": { id: "판의 뿔", name: "판의 뿔", category: "material", icon: "", image: "../img/317.png" },
	"페어리의 날개": { id: "페어리의 날개", name: "페어리의 날개", category: "material", icon: "", image: "../img/313.png" },
	"페어리 더스트": { id: "페어리 더스트", name: "페어리 더스트", category: "base", icon: "", image: "../img/312.png" },

	"미스릴 판금": { id: "미스릴 판금", name: "미스릴 판금", category: "material", icon: "", image: "../img/329.png" },
	"오리하루콘 판금": { id: "오리하루콘 판금", name: "오리하루콘 판금", category: "material", icon: "", image: "../img/330.png" },
	"미스릴 실": { id: "미스릴 실", name: "미스릴 실", category: "material", icon: "", image: "../img/307.png" },
	"아라크네의 거미줄": { id: "아라크네의 거미줄", name: "아라크네의 거미줄", category: "material", icon: "️", image: "../img/326.png" },
	"아라크네의 허물": { id: "아라크네의 허물", name: "아라크네의 허물", category: "material", icon: "️", image: "../img/306.png" },

	"미스릴": { id: "미스릴", name: "미스릴", category: "base", icon: "", image: "../img/318.png" },
	"미스릴 원석": { id: "미스릴 원석", name: "미스릴 원석", category: "base", icon: "", image: "../img/320.png" },
	"오리하루콘": { id: "오리하루콘", name: "오리하루콘", category: "base", icon: "", image: "../img/319.png" },
	"버섯포자의 즙": { id: "버섯포자의 즙", name: "버섯포자의 즙", category: "base", icon: "", image: "../img/82.png" },
	"엔트의 줄기": { id: "엔트의 줄기", name: "엔트의 줄기", category: "base", icon: "", image: "../img/309.png" },
	"엔트의 껍질": { id: "엔트의 껍질", name: "엔트의 껍질", category: "base", icon: "", image: "../img/311.png" },
	"정령의 돌": { id: "정령의 돌", name: "정령의 돌", category: "base", icon: "", image: "../img/235.png" },
	"판의 갈기털": { id: "판의 갈기털", name: "판의 갈기털", category: "base", icon: "", image: "../img/314.png" },

	"실": { id: "실", name: "실", category: "base", icon: "", image: "../img/308.png" },


	"단검심": { id: "단검심", name: "단검심", category: "weapon", icon: "", image: "../img/322.png" },
	"장검심": { id: "장검심", name: "장검심", category: "weapon", icon: "", image: "../img/321.png" },
	"오리하루콘 검심": { id: "오리하루콘 검심", name: "오리하루콘 검심", category: "weapon", icon: "", image: "../img/321.png" },
	"미스릴 도금 뿔": { id: "미스릴 도금 뿔", name: "미스릴 도금 뿔", category: "weapon", icon: "", image: "../img/315.png" },
	"오리하루콘 도금 뿔": { id: "오리하루콘 도금 뿔", name: "오리하루콘 도금 뿔", category: "weapon", icon: "", image: "../img/316.png" },
	"오우거의 피": { id: "오우거의 피", name: "오우거의 피", category: "base", icon: "", image: "../img/324.png" },


	"하얀 옷감": { id: "하얀 옷감", name: "하얀 옷감", category: "base", icon: "", image: "../img/520.png" },
	"파란 옷감": { id: "파란 옷감", name: "파란 옷감", category: "base", icon: "", image: "../img/517.png" },
	"붉은 옷감": { id: "붉은 옷감", name: "붉은 옷감", category: "base", icon: "", image: "../img/519.png" },


	"오우거의 피": { id: "오우거의 피", name: "오우거의 피", category: "base", icon: "", image: "../img/324.png" },
	"파워 글로브": { id: "파워 글로브", name: "파워 글로브", category: "armor", icon: "", image: "../img/328.png" },
	"티셔츠": { id: "티셔츠", name: "티셔츠", category: "armor", icon: "", image: "../img/110.png" },
	"마법 망토": { id: "마법 망토", name: "마법 망토", category: "armor", icon: "", image: "../img/265.png" },
	"보호 망토": { id: "보호 망토", name: "보호 망토", category: "armor", icon: "", image: "../img/30.png" },
	
	"동물가죽": { id: "동물가죽", name: "동물가죽", category: "base", icon: "", image: "../img/446.png" },
	"고급피혁": { id: "고급피혁", name: "고급피혁", category: "base", icon: "", image: "../img/455.png" },
	"가죽모자": { id: "가죽모자", name: "가죽모자", category: "armor", icon: "", image: "../img/451.png" },
	"가죽샌달": { id: "가죽샌달", name: "가죽샌달", category: "armor", icon: "", image: "../img/452.png" },
	"가죽조끼": { id: "가죽조끼", name: "가죽조끼", category: "armor", icon: "", image: "../img/459.png" },
	"가죽방패": { id: "가죽방패", name: "가죽방패", category: "armor", icon: "", image: "../img/449.png" },
	"가죽투구": { id: "가죽투구", name: "가죽투구", category: "armor", icon: "", image: "../img/456.png" },
	"가죽부츠": { id: "가죽부츠", name: "가죽부츠", category: "armor", icon: "", image: "../img/461.png" },
	"중갑가죽조끼": { id: "중갑가죽조끼", name: "중갑가죽조끼", category: "armor", icon: "", image: "../img/462.png" },
	"벨트": { id: "벨트", name: "벨트", category: "armor", icon: "", image: "../img/264.png" },
	"벨트달린 가죽조끼": { id: "벨트달린 가죽조끼", name: "벨트달린 가죽조끼", category: "armor", icon: "", image: "../img/460.png" },
	"징박은 가죽샌달": { id: "징박은 가죽샌달", name: "징박은 가죽샌달", category: "armor", icon: "", image: "../img/447.png" },
	"징박은 가죽조끼": { id: "징박은 가죽조끼", name: "징박은 가죽조끼", category: "armor", icon: "", image: "../img/458.png" },
	"철괴": { id: "철괴", name: "철괴", category: "base", icon: "", image: "../img/454.png" },
	"부츠": { id: "철괴", name: "철괴", category: "armor", icon: "", image: "../img/435.png" },
	"기사의 면갑": { id: "기사의 면갑", name: "기사의 면갑", category: "armor", icon: "", image: "../img/166.png" },
	"장갑": { id: "장갑", name: "장갑", category: "armor", icon: "", image: "../img/141.png" },
	"사각 방패": { id: "사각 방패", name: "사각 방패", category: "armor", icon: "", image: "../img/177.png" },
	"판금 갑옷": { id: "판금 갑옷", name: "판금 갑옷", category: "armor", icon: "", image: "../img/73.png" },
	"강철 장갑": { id: "강철 장갑", name: "강철 장갑", category: "armor", icon: "", image: "../img/506.png" },
	"강철 면갑": { id: "강철 면갑", name: "강철 면갑", category: "armor", icon: "", image: "../img/507.png" },
	"강철 방패": { id: "강철 방패", name: "강철 방패", category: "armor", icon: "", image: "../img/508.png" },
	"강철 부츠": { id: "강철 부츠", name: "강철 부츠", category: "armor", icon: "", image: "../img/509.png" },
	"강철 판금 갑옷": { id: "강철 판금 갑옷", name: "강철 판금 갑옷", category: "armor", icon: "", image: "../img/510.png" },
  
};

const recipes_db = {
  "크로스보우": { npc: "네루파", location: "요정의숲", materials: [{ id: "페어리의 날개", count: 8 }, { id: "오리하루콘 판금", count: 3 }, { id: "미스릴 실", count: 20 }, { id: "아라크네의 거미줄", count: 30 }] },
  "미스릴": { npc: "페어리, 페어리 퀸", location: "요정의숲", materials: [{ id: "미스릴 원석", count: 0.25 }] },
  "오리하루콘": { npc: "페어리 퀸", location: "요정의숲", materials: [{ id: "미스릴", count: 10 }] },
  "페어리의 날개": { npc: "페어리, 페어리 퀸", location: "요정의숲", materials: [{ id: "정령의 돌", count: 2 }, { id: "미스릴 실", count: 5 }] },
  "페어리 더스트": { npc: "네루파", location: "요정의숲", materials: [{ id: "정령의 돌", count: 0.05 }] },
  "미스릴 판금": { npc: "판", location: "요정의숲", materials: [{ id: "아라크네의 허물", count: 1 }, { id: "미스릴", count: 50 }] },
  "오리하루콘 판금": { npc: "판", location: "요정의숲", materials: [{ id: "아라크네의 허물", count: 1 }, { id: "오리하루콘", count: 30 }] },
  "마법의 플룻": { npc: "나르엔", location: "요정의숲", materials: [{ id: "오리하루콘", count: 10 }, { id: "엔트의 껍질", count: 1 }] },
  "판의 뿔": { npc: "판", location: "요정의숲", materials: [{ id: "마법의 플룻", count: 1 }] },
  "미스릴 실": { npc: "아라크네", location: "요정의숲", materials: [{ id: "미스릴", count: 5 }, { id: "실", count: 1 }] },
  "아라크네의 거미줄": { npc: "아라크네", location: "요정의숲", materials: [{ id: "엔트의 줄기", count: 2 }] },
  "아라크네의 허물": { npc: "아라크네", location: "요정의숲", materials: [{ id: "엔트의 껍질", count: 3 }] },
  "실": { npc: "아라크네", location: "요정의숲", materials: [{ id: "판의 갈기털", count: 1 }] },
  
  
  "강철 장갑": { npc: "헥터", location: "기란", materials: [{ id: "철괴", count: 150 }, { id: "장갑", count: 1 }, { id: "아데나", count: 25000 }] },
  "강철 면갑": { npc: "헥터", location: "기란", materials: [{ id: "철괴", count: 120 }, { id: "기사의 면갑", count: 1 }, { id: "아데나", count: 16500 }] },
  "강철 방패": { npc: "헥터", location: "기란", materials: [{ id: "철괴", count: 200 }, { id: "사각 방패", count: 1 }, { id: "아데나", count: 16000 }] },
  "강철 부츠": { npc: "헥터", location: "기란", materials: [{ id: "철괴", count: 160 }, { id: "부츠", count: 1 }, { id: "아데나", count: 8000 }] },
  "강철 판금 갑옷": { npc: "헥터", location: "기란", materials: [{ id: "철괴", count: 450 }, { id: "판금 갑옷", count: 1 }, { id: "아데나", count: 30000 }] },  
  
  "고급피혁": { npc: "빈센트", location: "기란", materials: [{ id: "동물가죽", count: 20 }] },
  "가죽모자": { npc: "빈센트", location: "기란", materials: [{ id: "동물가죽", count: 5 }, { id: "철괴", count: 1 }] },
  "가죽샌달": { npc: "빈센트", location: "기란", materials: [{ id: "동물가죽", count: 6 }, { id: "철괴", count: 2 }] },
  "가죽조끼": { npc: "빈센트", location: "기란", materials: [{ id: "동물가죽", count: 10 }] },
  "가죽방패": { npc: "빈센트", location: "기란", materials: [{ id: "동물가죽", count: 7 }] },
  "가죽투구": { npc: "빈센트", location: "기란", materials: [{ id: "투구", count: 1 }, { id: "가죽모자", count: 1 }, { id: "철괴", count: 5 }, { id: "고급피혁", count: 5 }] },
  "가죽부츠": { npc: "빈센트", location: "기란", materials: [{ id: "징박은 가죽샌달", count: 1 }, { id: "철괴", count: 10 }, { id: "고급피혁", count: 15 }, { id: "아데나", count: 300 }] },
  "중갑가죽조끼": { npc: "빈센트", location: "기란", materials: [{ id: "징박은 가죽조끼", count: 1 }, { id: "철괴", count: 15 }, { id: "고급피혁", count: 15 }] },
  "벨트": { npc: "빈센트", location: "기란", materials: [{ id: "철괴", count: 2 }, { id: "고급피혁", count: 5 }] },
  "벨트달린 가죽조끼": { npc: "빈센트", location: "기란", materials: [{ id: "가죽조끼", count: 1 }, { id: "벨트", count: 1 }] },
  
  "티셔츠": { npc: "허버트", location: "기란", materials: [{ id: "하얀 옷감", count: 1 }, { id: "하얀 옷감", count: 10 }, { id: "파란 옷감", count: 2 }, { id: "붉은 옷감", count: 3 }, { id: "아데나", count: 30000 }] },
  "마법 망토": { npc: "허버트", location: "기란", materials: [{ id: "하얀 옷감", count: 1 }, { id: "하얀 옷감", count: 1 }, { id: "파란 옷감", count: 2 }, { id: "붉은 옷감", count: 10 }, { id: "아데나", count: 1000 }] },
  "보호 망토": { npc: "허버트", location: "기란", materials: [{ id: "하얀 옷감", count: 1 }, { id: "하얀 옷감", count: 10 }, { id: "파란 옷감", count: 5 }, { id: "붉은 옷감", count: 5 }, { id: "아데나", count: 20000 }] },
  
  
  
  
  
  
};