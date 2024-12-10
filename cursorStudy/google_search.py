from googleapiclient.discovery import build
import json

def google_search(search_term, api_key, cse_id, **kwargs):
    """
    使用 Google Custom Search API 进行搜索
    
    参数:
        search_term: 搜索关键词
        api_key: Google API 密钥
        cse_id: 自定义搜索引擎 ID
    """
    service = build("customsearch", "v1", developerKey=api_key)
    
    try:
        # 执行搜索
        res = service.cse().list(q=search_term, cx=cse_id, **kwargs).execute()
        return res['items']
    except Exception as e:
        print(f"搜索时发生错误: {str(e)}")
        return None

def main():
    # 替换为你的 API 密钥和搜索引擎 ID
    API_KEY = 'your_api_key_here'
    SEARCH_ENGINE_ID = 'your_search_engine_id_here'
    
    # 搜索示例
    query = "Python programming"
    results = google_search(
        query,
        API_KEY,
        SEARCH_ENGINE_ID,
        num=10  # 返回结果数量
    )
    
    if results:
        for i, result in enumerate(results, 1):
            print(f"\n结果 {i}:")
            print(f"标题: {result['title']}")
            print(f"链接: {result['link']}")
            print(f"描述: {result['snippet']}")

if __name__ == "__main__":
    main() 