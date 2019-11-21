import Rule from './rule_class';
import _ from 'lodash';
import { TIRuleData, GFP } from '../types';

/**
 * Rules Handler
 *
 * @export
 * @class RulesHandler
 */
export default class RulesHandler {
  rules: Rule[];
  data: TIRuleData[];
  activeRuleIndex: any;
  /**
   * Creates an instance of RulesHandler.
   * @param {any[]} data
   * @memberof RulesHandler
   */
  constructor(data: TIRuleData[]) {
    GFP.log.info('RulesHandler.constructor()');
    this.rules = [];
    this.data = data;
    this.import(this.data);
  }

  /**
   * import datas in rule
   *
   * @return this
   * @param {any} obj
   * @memberof RulesHandler
   */
  import(obj: any[]): this {
    GFP.log.info('RuleHandler.import()');
    this.rules = [];
    let index = 1;
    if (obj !== undefined && obj !== null && obj.length > 0) {
      // Fix bug of grafana 6+
      if (obj[0].order !== undefined) {
        obj = _.sortBy(_.sortBy(obj, o => o.order));
      }
      obj.forEach(map => {
        const newData: any = {};
        const rule = new Rule(map.pattern, newData);
        rule.import(map);
        rule.setOrder(index);
        index += 1;
        this.rules.push(rule);
        this.data.push(newData);
      });
    }
    return this;
  }

  static getDafaultData(): TIRuleData[] {
    return [];
  }

  /**
   * Return array of rules
   *
   * @returns {Array} of Rules
   * @memberof RulesHandler
   */
  getRules(): Rule[] {
    return this.rules;
  }

  /**
   * Get Rule at index
   *
   * @param {number} index
   * @returns {Rule}
   * @memberof RulesHandler
   */
  getRule(index: number) {
    return this.rules[index];
  }

  /**
   * Add a new rule
   *
   * @param {string} pattern
   * @returns {Rule} New rule
   * @memberof RulesHandler
   */
  addRule(pattern: string): Rule {
    const data = Rule.getDefaultData();
    const newRule = new Rule(pattern, data);
    this.rules.push(newRule);
    this.data.push(data);
    newRule.setOrder(this.countRules());
    return newRule;
  }

  /**
   * count number of rules
   *
   * @returns {number}
   * @memberof RulesHandler
   */
  countRules(): number {
    if (this.rules !== undefined && Array.isArray(this.rules)) {
      return this.rules.length;
    }
    return 0;
  }

  /**
   * Redefine Order number of rules
   *
   * @memberof RulesHandler
   */
  setOrder() {
    for (let index = 0; index < this.rules.length; index++) {
      const rule = this.rules[index];
      rule.setOrder(index + 1);
    }
  }

  /**
   * Remove rule at index
   *
   * @param {number} index
   * @memberof RulesHandler
   */
  removeRule(index: number) {
    this.rules.splice(index, 1);
    this.data.splice(index, 1);
    this.setOrder();
  }

  /**
   * Clone rules at index in index - 1
   *
   * @param {number} index
   * @returns {Rule}
   * @memberof RulesHandler
   */
  cloneRule(index: number): Rule {
    const rule = this.getRule(index);
    const data = rule.getData();
    const newData: TIRuleData = Rule.getDefaultData();
    this.reduce();
    const newRule = new Rule(newData.pattern, newData);
    newRule.import(data);
    newData.alias = `Copy of ${newData.alias}`;
    this.rules.splice(index, 0, newRule);
    this.data.splice(index, 0, newData);
    newRule.data.reduce = false;
    this.activeRuleIndex = index;
    this.setOrder();
    const elt = document.getElementById(newRule.getId());
    //TODO: verify ScrollTo
    if (elt) {
      setTimeout(() => {
        elt.focus();
      }, 100);
    }
    return newRule;
  }

  /**
   * Reduce all rules
   *
   * @memberof RulesHandler
   */
  reduce() {
    this.getRules().forEach(rule => {
      rule.data.reduce = true;
    });
  }

  /**
   * Move rule on index in index - 1
   *
   * @param {number} index index
   * @memberof RulesHandler
   */
  moveRuleToUp(index: number) {
    const first = 0;
    const rules = this.rules;
    const last = rules.length - 1;
    if (index !== first && last !== first) {
      const curr = rules[index];
      curr.setOrder(index);
      const before = rules[index - 1];
      before.setOrder(index + 1);
      rules[index - 1] = curr;
      rules[index] = before;
    }
  }

  /**
   * Move rule on index in index + 1
   *
   * @param {number} index
   * @memberof RulesHandler
   */
  moveRuleToDown(index: number) {
    const first = 0;
    const rules = this.rules;
    const last = rules.length - 1;
    if (index !== last && last !== first) {
      const curr = rules[index];
      curr.setOrder(index + 2);
      const after = rules[index + 1];
      after.setOrder(index + 1);
      rules[index + 1] = curr;
      rules[index] = after;
    }
  }
}
