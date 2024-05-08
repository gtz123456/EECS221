using UnityEngine;

public class CubeController : MonoBehaviour
{
    public float detectionRadius = 0.5f; // 设置检测半径，根据实际情况调整

    private void Update()
    {
        DetectAndDestroyAdjacentCubes();
    }

    private void DetectAndDestroyAdjacentCubes()
    {
        Collider[] colliders = Physics.OverlapSphere(transform.position, detectionRadius); // 获取半径范围内的碰撞器

        foreach (Collider collider in colliders)
        {
            if (collider.gameObject != gameObject && collider.CompareTag("Cube")) // 排除自身并确保碰撞对象是方块
            {
                CubeController adjacentCube = collider.GetComponent<CubeController>();
                if (adjacentCube != null && adjacentCube.IsSameMaterial(gameObject)) // 检测是否为相同类型的方块
                {
                    DestroyAdjacentCubes(gameObject, collider.gameObject);
                }
            }
        }
    }

    private bool IsSameMaterial(GameObject otherCube)
    {
        Renderer renderer1 = GetComponent<Renderer>();
        Renderer renderer2 = otherCube.GetComponent<Renderer>();

        if (renderer1 != null && renderer2 != null && renderer1.sharedMaterial != null && renderer2.sharedMaterial != null)
        {
            return renderer1.sharedMaterial == renderer2.sharedMaterial;
        }
        return false;
    }

    private void DestroyAdjacentCubes(GameObject cube1, GameObject cube2)
    {
        Destroy(cube1);
        Destroy(cube2);
        // 在这里可以添加销毁方块时的特效或者动画
    }
}
