/**
 * 角色查询参数
 */
export interface RoleQuery extends PageQuery {
  keywords?: string;
}

/**
 * 角色分页对象
 */
export interface RolePageVO {
  /**
   * 角色编码
   */
	roleCode?: string;

  /**
   * 角色ID
   */
  id?: number;
  /**
   * 角色名称
   */
	roleName?: string;

  /**
   * 角色状态
   */
	enableFlag?: number;
  /**
   * 创建时间
   */
  createTime?: Date;
  /**
   * 修改时间
   */
  updateTime?: Date;
}

/**
 * 角色分页
 */
export type RolePageResult = PageResult<RolePageVO[]>;

/**
 * 角色表单对象
 */
export interface RoleForm {
  /**
   * 角色ID
   */
  id?: number;

  /**
   * 角色编码
   */
	roleCode: string;
  /**
   * 数据权限
   */
  dataScope?: number;

  /**
   * 角色名称
   */
	roleName: string;

  /**
   * 角色状态(1-正常；0-停用)
   */
	enableFlag?: number;
}
